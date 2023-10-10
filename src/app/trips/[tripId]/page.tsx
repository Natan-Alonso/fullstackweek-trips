import { prisma } from '@/lib/prisma'
import TripHeader from './components/TripHeader'

const getTripDetail = async (tripId: string) => {
  const trip = await prisma.trip.findUnique({
    where: {
      id: tripId,
    },
  })
  return trip
}

const TripDetails = async ({ params }: { params: { tripId: string } }) => {
  const trip = await getTripDetail(params.tripId)

  if (!trip) return null

  return (
    <div className="container mx-auto">
      <TripHeader trip={trip} />
      {/* reserva */}
    </div>
  )
}

export default TripDetails
