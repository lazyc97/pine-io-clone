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
      <section className="px-4 mt-24">
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
      <section className="px-4 mt-16">
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
      <section className="px-4 mt-16">
        <div className="mt-16 text-center">
          <h3 className="font-bold leading-relaxed text-3xl">Check off your work with Pine.</h3>
          <h5 className="mt-3 opacity-75 leading-tight">Your todo list always nearby</h5>
        </div>
        <div className="mt-12 text-center">
          <h5>Pine Todos are everything you hope they'd be.</h5>
          <p className="mt-4 opacity-50 leading-relaxed">Dates, recurrences, colored labels, tags, comments, smart parsing, they have the lot!</p>
        </div>
        <div className="mt-8 text-center">
          <h5>Share your progress</h5>
          <p className="mt-4 opacity-50 leading-relaxed">Keep your friends updated, share your project's to-do list with everyone involved, they'll see the progress live</p>
        </div>
        <div className="mt-8">
          <img src="https://pine.io/static/pine-task-manager-todo-web-app-a3e25bbfef87c48e346ce525218c05de.png" alt="Pine, Task Manager, Todo App"></img>
        </div>
      </section>
      <section className="px-4 mt-16">
        <div className="text-center">
          <h3 className="font-bold leading-relaxed text-3xl">Track your Habits with Pine.</h3>
          <h5 className="mt-3 opacity-75 leading-tight">Developing new habits can be hard. Pine makes it easy.</h5>
        </div>
        <div className="mt-12 text-center">
          <h5>Like recurring todos on steroids</h5>
          <p className="mt-4 opacity-50 leading-relaxed">Pine Habits track your streaks and other stats, let you leave comments and measure every session.</p>
        </div>
        <div className="mt-8 text-center">
          <h5>Track progress</h5>
          <p className="mt-4 opacity-50 leading-relaxed">Create custom trackers for any habit, measure your progress for anything.</p>
        </div>
        <div className="mt-8">
          <img src="https://pine.io/static/pine-habit-tracker-web-app-01ba6f00d399625a82f5a004f01b0aa4.png" alt="Pine, Habit Tracking web app"></img>
        </div>
      </section>
      <section className="px-4 mt-16">
        <div className="text-center">
          <h3 className="font-bold leading-relaxed text-3xl">Do much more with Pine.</h3>
          <h5 className="mt-3 opacity-75 leading-tight">Organize, bookmark, upload.</h5>
        </div>
        <div className="mt-12 text-center">
          <h5>Organize in Space and Time</h5>
          <p className="mt-4 opacity-50 leading-relaxed">Use Boards to drag-and-drop your content close together. All your work is recorded in a timeline so that you could see what you did in the past and what you'll need to do today and in the future</p>
        </div>
        <div className="mt-8 text-center">
          <h5>Bookmark websites</h5>
          <p className="mt-4 opacity-50 leading-relaxed">Keep the links you want to bookmark together with your projects.</p>
        </div>
        <div className="mt-8 text-center">
          <h5>File upload</h5>
          <p className="mt-4 opacity-50 leading-relaxed">Upload files, keep them close to your work and preview all media directly in Pine!</p>
        </div>
        <div className="mt-8">
          <img src="https://pine.io/static/pine-organizer-productivity-web-app-49cab2c03e87fd785eacff66b60c0f18.png" alt="Pine, Organizer, Productivity web app"></img>
        </div>
      </section>
      <section className="px-4 mt-16">
        <div className="text-center">
          <h3 className="font-bold leading-relaxed text-3xl">Pine is made with Love.</h3>
          <div className="mt-8 flex justify-center">
            <img className="w-24 h-24 rounded-full" src="https:/pine.io/static/henrikas-kuzmickas-pine-87ec03677c27d7cbcb59fec5bd7986e3.png"></img>
          </div>
          <p className="mt-8 leading-6">
            Hi! My name is Henrikas and I'm not an evil corporation.
            <br />
            Pine does not deal with the needs of investors, boards or marketing people.
            <br />
            The only thing that matters is your opinion.
          </p>
          <p className="mt-8">
            Have tips, feature requests or bug reports?
            <br />
            Just feel like chatting?
            <br />
            <br />
            Catch me on <a className="text-blue-500" href="https://twitter.com/henry_kuzmick" target="_blank">twitter</a>, or send an email to <a className="text-blue-500" href="mailto:hello@pine.io?subject = Hello" target="_blank">hello@pine.io</a>
            </p>
        </div>
      </section>
      <section className="px-4 mt-24">
        <div>
          <h3 className="text-center font-bold leading-relaxed text-3xl">Sign up Today!</h3>
          <h5 className="mt-3 opacity-75 text-center leading-relaxed">
            Pine is currently in an open Beta.
            <br />
            Sign up to try it out before the official release!
          </h5>
          <div className="flex justify-center">
            <button className="py-4 px-8 mt-8 flex items-center leading-tight rounded-2xl opacity-75 bg-red-700 text-white font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.8 10H12v4h5.7c-.8 2.3-3 4-5.7 4-3.3 0-6-2.7-6-6s2.7-6 6-6c1.7 0 3.2.7 4.2 1.8L19 5c-1.7-1.9-4.2-3-7-3C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10c0-.7-.1-1.4-.2-2z"></path></svg>
              <span className="ml-2">Sign up with Google</span>
            </button>
          </div>
        </div>
        <div className="mt-8 flex justify-center opacity-50 text-gray-900">
          <span>- OR -</span>
        </div>
        <form className="mt-8">
          <input className="p-4 w-full rounded-lg bg-gray-200 focus:border-2 focus:border-blue-800" placeholder="Email" />
          <input className="mt-8 p-4 w-full rounded-lg bg-gray-200 focus:border-2 focus:border-blue-800" placeholder="Password" />
          <div className="flex justify-center">
            <button className="mt-8 py-4 px-8 mt-8 text-center leading-tight rounded-2xl opacity-75 bg-red-700 text-white font-medium">Sign up with Google</button>
          </div>
          <div className="mt-8 mx-8 text-xs text-gray-900 leading-tighter opacity-50">
            By clicking “Sign up with Google/Email” above, you acknowledge that you have read and understood, and agree to Pine's <a className="underline" href="https://pine.io/terms-and-conditions" target="_blank">Terms and Conditions</a> and <a className="text-blue-500" href="https://pine.io/privacy-policy" target="_blank">Privacy Policy</a>.
          </div>
        </form>
      </section>
    </main>
  </div>
)

export default IndexPage;
