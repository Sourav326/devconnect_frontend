const Hero = () => {
    return(
        <>
        <div
  className="hero min-h-screen"
  style={{
    backgroundImage:
      "url(./hero.png)",
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-full">
      <h1 className="mb-5 text-7xl font-bold">Connect . Collaborate . Grow together</h1>
      <p className="mb-5 text-lg">
       Devconnect is a community for developers to connect, share ideas, solve problems, and build the future together.
      </p>
      <button className="btn btn-secondary">Get Started</button>
    </div>
  </div>
</div>
        </>
    )
}

export default Hero