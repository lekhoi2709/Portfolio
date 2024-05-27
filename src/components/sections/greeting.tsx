export default function Greeting() {
  return (
    <section className="w-full h-screen flex flex-col gap-4 md:gap-8 items-center justify-center">
      <div className="w-full max-w-[800px] text-left flex flex-col gap-4">
        <p className="text-blue-500 font-title text-xs">Hello, my name is</p>
        <h1 className="md:text-6xl text-4xl">LE DINH KHOI.</h1>
        <h2 className="text-xl md:text-3xl dark:text-slate-400 text-slate-700">
          I am a web developer
        </h2>
        <p className="dark:text-slate-300 text-sm text-slate-600">
          I'm passionate about creating dynamic and responsive web applications.
          Explore my portfolio to see my projects and learn more about my
          journey in web development. Let's connect and collaborate!
        </p>
      </div>
    </section>
  );
}
