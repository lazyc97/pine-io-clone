const IndexPage = () => (
  <div className="min-h-screen">
    <header>
      <div className="h-20 flex items-center border-b border-gray-300">
        <div className="flex ml-4 mr-5 w-full justify-between">
          <a aria-current="page" className="flex items-center" href="/">
            <svg className="fill-current text-teal-900" width="18.04" height="20" viewBox="0 0 352 390" xmlns="http://www.w3.org/2000/svg"><path d="M332.444 312c-69.05 0-126.152-51.285-135.422-117.624C221.78 218.848 255.806 234 293.333 234c10.795 0 19.556-8.716 19.556-19.5s-8.761-19.5-19.556-19.5c-53.914 0-97.777-43.738-97.777-97.5v-.507C211.943 109.375 232.124 117 254.222 117c10.795 0 19.556-8.716 19.556-19.5S265.017 78 254.222 78c-32.345 0-58.666-26.247-58.666-58.5C195.556 8.716 186.795 0 176 0c-10.795 0-19.556 8.716-19.556 19.5 0 32.253-26.321 58.5-58.666 58.5-10.795 0-19.556 8.716-19.556 19.5S86.983 117 97.778 117c22.098 0 42.279-7.625 58.666-20.007v.507c0 53.762-43.863 97.5-97.777 97.5-10.795 0-19.556 8.716-19.556 19.5S47.872 234 58.667 234c37.527 0 71.553-15.151 96.31-39.624C145.709 260.715 88.608 312 19.557 312 8.76 312 0 320.716 0 331.5S8.76 351 19.556 351c55.264 0 104.602-25.584 136.888-65.442V370.5c0 10.784 8.761 19.5 19.556 19.5 10.795 0 19.556-8.716 19.556-19.5v-84.942C227.842 325.416 277.18 351 332.444 351 343.24 351 352 342.284 352 331.5s-8.76-19.5-19.556-19.5z"></path></svg>
            <h1 className="ml-2 text-teal-900">Pine</h1>
          </a>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </div>
        </div>
      </div>
    </header>
    <main className="font-sans">
      <section className="px-4">
        <div className="mt-24 text-center">
          <h3 className="font-bold leading-relaxed text-3xl">Pine is Everywhere.</h3>
          <p className="mt-8">
            Pine is a responsive web app. Use it anywhere with just your browser!
            <br />
            Don't like web apps? Don't worry, dedicated apps for Mac, iOS, and Android are coming soon!
          </p>
        </div>
        <img className="mt-24" src="https://pine.io/static/pine-productivity-responsive-web-app-e6cf5f2a1da8eedfd7def0c0a4a97fbf.png" alt="Pine, Responsive productivity Web App"></img>
      </section>
      <section className="px-4">
        <div className="mt-16 text-center">
          <h3 className="font-bold leading-relaxed text-3xl">Write with Pine.</h3>
          <h5 className="mt-3 opacity-75 leading-tight">Pine notes are simple to use, elegant and powerful.</h5>
        </div>
        <div className="mt-12 text-center">
          <h5>Simple yet powerful</h5>
          <p className="mt-4 opacity-50 leading-relaxed">Pine Notes are simple enough for quick memos, yet powerful enough to write a novel.</p>
        </div>
        <div className="mt-8 text-center">
          <h5>Version control</h5>
          <p className="mt-4 opacity-50 leading-relaxed">Save a version of your work at any point in time. Never lose it.</p>
        </div>
        <div className="mt-8 text-center">
          <h5>Share your notes</h5>
          <p className="mt-4 opacity-50 leading-relaxed">Pine lets you share your notes with a simple weblink. Get your writing online with a single click, keep it updated automatically.</p>
        </div>
        <div className="mt-8">
          <img src="https://pine.io/static/pine-writing-note-taking-web-app-feb088b32d959d0d1c5bc91c5d4dd187.png" alt="Pine, note taking web app"></img>
        </div>
      </section>
    </main>
  </div>
)

export default IndexPage;
