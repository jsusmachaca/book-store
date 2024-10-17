const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    className="w-6 h-6 text-yellow-400"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
)

const Rating = ({ value }: { value: number }) => {
  const stars: number[] = Array.from({ length: Math.floor(value) }, (_, index) => index + 1)
  return (
    <div className="flex items-center">
      {stars.map((star) => (
        <StarIcon key={star} filled={star <= Math.round(value)} />
      ))}
      <span className="ml-2 text-gray-600">({value.toFixed(1)})</span>
    </div>
  )
}

export default Rating