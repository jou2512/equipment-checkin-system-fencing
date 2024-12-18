// src/lib/mock-data/check-in-mock.ts
import { CheckIn, CheckInCheckInStatusType, TournamentActiveWeapons, TournamentActiveWeaponsType } from "../appwrite/types"

// Function to generate mock check-in data
export function generateMockCheckInData(count: number = 100): CheckIn[] {
  const weapons: TournamentActiveWeaponsType[] = ['epee', 'foil', 'sabre']
  const nationalities = ['USA', 'GER', 'FRA', 'ITA', 'CHN', 'JPN', 'RUS', 'KOR']
  const statuses: CheckInCheckInStatusType[] = ['pending', 'in_review', 'approved', 'partially_approved', 'rejected']

  const mockData: CheckIn[] = []

  for (let i = 1; i < count+1; i++) {
    // Randomize creation time within last 24 hours
    const createdAt = new Date(
      Date.now() - Math.random() * 48 * 60 * 60 * 1000
      ).toISOString()
      
      const status = statuses[Math.floor(Math.random() * statuses.length)]

    mockData.push({
      $id: `mock_checkin_${i}`,
      checkNumber: i,
      fencerName: `Fencer ${i}`,
      nationalityCode: nationalities[Math.floor(Math.random() * nationalities.length)],
      tournaments: 'mock_tournament_1',
      weaponType: 'epee',
      itemChecks: [
        {
          $id: 'mask_1',
          itemName: 'Mask',
          quantity: 1,
          status: statuses[Math.floor(Math.random() * statuses.length)]
        },
        {
          $id: 'epee_1',
          itemName: 'Epee',
          quantity: 1,
          status: statuses[Math.floor(Math.random() * statuses.length)]
        }
      ],
      CheckInStatus: status,
      pickupConfirmed: Math.random() > 0.7 && (status === 'approved' || status === 'rejected' || status === 'partially_approved'),
      $createdAt: createdAt,
      $updatedAt: createdAt,
      eventKey: 'mock_tournament_1',
    })
  }

  return mockData
}