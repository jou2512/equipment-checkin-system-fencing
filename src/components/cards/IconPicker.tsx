import React, {
  useState,
  useMemo,
  Suspense,
  useCallback,
  useEffect,
} from "react";
import { LucideProps, LucideIcon } from "lucide-react";
import dynamicIconImports from "lucide-react/dynamicIconImports";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ICONS_PER_PAGE = 48; // Number of icons to load at once
const INTERSECTION_THRESHOLD = 0.1;

interface IconPickerProps {
  onSelectIcon: (iconName: keyof typeof dynamicIconImports) => void;
  className?: string;
}

const DynamicIcon = ({
  name,
  ...props
}: {
  name: keyof typeof dynamicIconImports;
} & Omit<LucideProps, "ref">) => {
  const IconComponent = React.lazy(dynamicIconImports[name]);

  return (
    <Suspense
      fallback={<div className="w-6 h-6 bg-gray-200 rounded animate-pulse" />}
    >
      <IconComponent {...props} />
    </Suspense>
  );
};

const IconPicker: React.FC<IconPickerProps> = ({ onSelectIcon, className }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleIcons, setVisibleIcons] = useState<string[]>([]);
  const [page, setPage] = useState(1);
  const [loadMoreRef, setLoadMoreRef] = useState<HTMLDivElement | null>(null);

  const iconNames = useMemo(() => {
    return Object.keys(
      dynamicIconImports
    ) as (keyof typeof dynamicIconImports)[];
  }, []);

  const filteredIconNames = useMemo(() => {
    return iconNames.filter((name) =>
      name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [iconNames, searchTerm]);

  const formatIconName = (name: string) => {
    return name
      .replace(/-/g, " ")
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  // Reset pagination when search changes
  useEffect(() => {
    setPage(1);
    setVisibleIcons(filteredIconNames.slice(0, ICONS_PER_PAGE));
  }, [searchTerm, filteredIconNames]);

  // Intersection Observer for infinite loading
  useEffect(() => {
    if (!loadMoreRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const nextPage = page + 1;
          const startIndex = page * ICONS_PER_PAGE;
          const endIndex = startIndex + ICONS_PER_PAGE;
          const newIcons = filteredIconNames.slice(startIndex, endIndex);

          if (newIcons.length > 0) {
            setVisibleIcons((prev) => [...prev, ...newIcons]);
            setPage(nextPage);
          }
        }
      },
      {
        threshold: INTERSECTION_THRESHOLD,
        rootMargin: "100px",
      }
    );

    observer.observe(loadMoreRef);
    return () => observer.disconnect();
  }, [loadMoreRef, page, filteredIconNames]);

  const debouncedSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const handler = setTimeout(() => {
        setSearchTerm(e.target.value);
      }, 300);
      return () => clearTimeout(handler);
    },
    []
  );

  return (
    <Card className={`w-full max-w-2xl ${className || ""}`}>
      <CardHeader>
        <CardTitle>Select Icon</CardTitle>
        <Input
          type="text"
          placeholder="Search icons..."
          onChange={debouncedSearch}
          className="w-full"
        />
      </CardHeader>
      <CardContent>
        <div className="h-[400px] overflow-auto">
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4">
            {visibleIcons.map((name) => (
              <button
                key={name}
                // @ts-ignore
                onClick={() => onSelectIcon(name)}
                className="p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 flex flex-col items-center gap-2 transition-colors"
                title={formatIconName(name)}
              >
                <DynamicIcon
                  // @ts-ignore
                  name={name}
                  className="w-6 h-6"
                />
                {/* <span className="text-xs text-center break-all">
                  {formatIconName(name)}
                </span> */}
              </button>
            ))}
          </div>
          {visibleIcons.length < filteredIconNames.length && (
            <div
              ref={setLoadMoreRef}
              className="w-full h-16 flex items-center justify-center"
            >
              <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default IconPicker;
