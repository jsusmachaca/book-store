

const Carousell = ({ images }: { images: string[] }) => {
  return (
    <div className="overflow-x-scroll snap-mandatory snap-x h-96 w-[450px] flex flex-row rounded-lg">
      {images.map((d, i) => (
        <img key={i} src={ d } alt="banner" className="w-[450px] snap-center rounded-lg mx-5" />
      ))}
    </div>
  )
}

export default Carousell
