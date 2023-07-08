import error404 from '../images/404.png'

const error = () => {
  return (
    <div className=" h-screen flex">
      <div className="h-screen flex flex-col items-center justify-center w-full">
        <p className=' text-4xl font-semibold py-4'>404 - Page not found </p>
        <p className=' text-xl font-light pl-14'>Whoops, this is a little embarrassing. This page doesn&apos;t seem to exist.</p>
      </div>
      <div>
        <img src={error404} />
      </div>
    </div>
  )
}

export default error