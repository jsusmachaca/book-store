

const Carousell = ({ images }: { images: string[] }) => {
  return (
    <div className='overflow-x-scroll snap-mandatory snap-x h-80 w-96 mt-6 flex flex-row rounded-lg'>
      {images.map((d, i) => (
        <img key={i} src={ d } alt="banner" className='w-96 snap-center rounded-lg mx-5' />
      ))}
    </div>
  )
}

export default Carousell
