import React from "react";

type IndexPageState = {
  passedHero: boolean;
  menuOpen: boolean;
};

function handleScrollFunc(page: IndexPage) {
  return (event: Event) => {
    page.setState({
      passedHero: (window.pageYOffset > 100),
    });
  }
}

class IndexPage extends React.Component<{}, IndexPageState> {
  constructor(props) {
    super(props);
    this.state = {
      passedHero: false,
      menuOpen: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', handleScrollFunc(this));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', handleScrollFunc(this));
  }

  clickMemuButton() {
    this.setState({
      menuOpen: !this.state.menuOpen,
    })
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <div className={'w-full h-full fixed z-50 bg-gray-900 sm:hidden ' + (this.state.menuOpen ? '' : 'hidden')}>
          <button className="m-4 p-2 absolute top-0 right-0 flex items-center" onClick={() => this.clickMemuButton()}>
            <svg className="text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
          <div className="pt-12 pb-5 px-5 h-full flex flex-col">
            <div className="flex-grow text-white text-3xl">
              <a aria-current="page" className="block" href="/">Home</a>
              <a className="block mt-4" href="https://pine.io/blog">Blog</a>
              <a className="block mt-4" href="https://pine.io/changelog">Changelog</a>
              <a className="block mt-4" href="https://pine.io/pricing">Pricing</a>
            </div>
            <div>
              <button className="px-6 py-3 rounded-full text-white text-2xl leading-tighter border border-gray-600">Log in</button>
              <button className="ml-4 px-6 py-3 rounded-full text-white text-2xl leading-tighter bg-red-500">Sign Up</button>
            </div>
          </div>
        </div>
        <header className={'w-full z-40 fixed top-0 ' + (this.state.passedHero ? 'bg-white' : 'bg-transparent')}>
          <div className={'h-20 flex items-center lg:justify-center ' + (this.state.passedHero ? 'border-b border-gray-300' : '')}>
            <div className="flex ml-4 mr-5 lg:ml-24 w-full lg:max-w-6xl justify-between">
              <a aria-current="page" className="flex items-center" href="/">
                <svg className={'fill-current ' + (this.state.passedHero ? 'text-teal-900' : 'text-white')} width="18.04" height="20" viewBox="0 0 352 390" xmlns="http://www.w3.org/2000/svg"><path d="M332.444 312c-69.05 0-126.152-51.285-135.422-117.624C221.78 218.848 255.806 234 293.333 234c10.795 0 19.556-8.716 19.556-19.5s-8.761-19.5-19.556-19.5c-53.914 0-97.777-43.738-97.777-97.5v-.507C211.943 109.375 232.124 117 254.222 117c10.795 0 19.556-8.716 19.556-19.5S265.017 78 254.222 78c-32.345 0-58.666-26.247-58.666-58.5C195.556 8.716 186.795 0 176 0c-10.795 0-19.556 8.716-19.556 19.5 0 32.253-26.321 58.5-58.666 58.5-10.795 0-19.556 8.716-19.556 19.5S86.983 117 97.778 117c22.098 0 42.279-7.625 58.666-20.007v.507c0 53.762-43.863 97.5-97.777 97.5-10.795 0-19.556 8.716-19.556 19.5S47.872 234 58.667 234c37.527 0 71.553-15.151 96.31-39.624C145.709 260.715 88.608 312 19.557 312 8.76 312 0 320.716 0 331.5S8.76 351 19.556 351c55.264 0 104.602-25.584 136.888-65.442V370.5c0 10.784 8.761 19.5 19.556 19.5 10.795 0 19.556-8.716 19.556-19.5v-84.942C227.842 325.416 277.18 351 332.444 351 343.24 351 352 342.284 352 331.5s-8.76-19.5-19.556-19.5z"></path></svg>
                <h1 className={'ml-2 ' + (this.state.passedHero ? 'text-teal-900' : 'text-white')}>Pine</h1>
              </a>
              <div className="sm:mr-3 flex flex-row">
                <button className="p-2 flex sm:hidden items-center" onClick={() => this.clickMemuButton()}>
                  <svg className={this.state.passedHero ? 'text-teal-900' : 'text-white'} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                </button>
                <a href="https://app.pine.io/login" className={'px-6 py-2 hidden sm:flex items-center ' + (this.state.passedHero ? 'text-teal-900' : 'text-white')}>
                  Log in
                </a>
                <a href="#signup" className={'px-6 py-2 hidden sm:flex rounded-full items-center bg-teal-900 text-white ' + (this.state.passedHero ? '' : 'border border-gray-500')}>
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </header>
        <main className="pb-20 sm:pb-0 lg:flex lg:flex-col font-sans">
          <section className="pt-24 sm:pt-0 h-screen-9/10 sm:h-screen-4/5 lg:h-screen-9/10 w-screen lg:flex lg:flex-col bg-teal-900">
            <div className="h-full w-full lg:max-w-6xl lg:self-center">
              <div className="h-full sm:ml-4 sm:flex sm:items-center">
                <div className="mx-4 text-center sm:text-left z-10">
                  <h1 className="mt-3 sm:leading-15">
                    <span className="text-white font-semibold text-2rem sm:text-5xl leading-10">Your personal journal.</span>
                    <br />
                    <span className="text-white text-2rem sm:text-5xl leading-10">Everywhere.</span>
                  </h1>
                  <h2 className="mt-3 text-white leading-7 sm:leading-9 font-light sm:text-xl opacity-75">
                    Keep notes, write prose, track habits,
                    <br />
                    tasks, and bookmarks. Organize your life.
                    <br />
                    All in one beautiful app.
                  </h2>
                  <div className="mt-8 flex justify-center sm:justify-start">
                    <a href="#signup" className="px-8 py-4 rounded-full bg-orange-400 text-xl text-teal-900 font-semibold">Sign Up for Free!</a>
                  </div>
                </div>
              </div>
              <div className="h-0 relative bottom-0">
                <div className="w-3/2 lg:max-w-5xl transform -translate-x-p3 sm:translate-x-p8 -translate-y-p84">
                  <img className="absolute" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYzMiIgaGVpZ2h0PSI4NDciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNLjEgNzA5SDE1MjciIHN0cm9rZT0iI0Y5QkM2MCIgc3Ryb2tlLXdpZHRoPSI1Ii8+PHBhdGggZD0iTTg4MS40IDY2NS42aC01NDhjLTQ2LjMgMC05MS4zIDE1LjMtMTI4IDQzLjRIOTk4Yy0zMi40LTI4LTczLjgtNDMuNC0xMTYuNi00My40eiIgZmlsbD0iI0Y5QkM2MCIgZmlsbC1ydWxlPSJub256ZXJvIi8+PC9nPjwvc3ZnPg=="></img>
                  <img className="absolute" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYzMyIgaGVpZ2h0PSI4NDciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBzdHJva2U9IiNGOUJDNjAiIHN0cm9rZS13aWR0aD0iNSIgZD0iTTEzNTIuNzI0IDY3LjkxOWwyNS4wOC01Mi4yOTkgNTIuMjk4IDI1LjA4LTI1LjA4IDUyLjI5OHoiLz48cGF0aCBzdHJva2U9IiNFMTYxNjIiIHN0cm9rZS13aWR0aD0iNSIgZD0iTTk5LjUgODI1LjFsMzQuMy0zNS41IDE3LjQgMTcuNyIvPjxwYXRoIHN0cm9rZT0iIzdDQzU3QyIgZD0iTTE1NzguNjU2IDc0Mi40ODJsMzYuMjUtMTYuNjc4IDE2LjY3OCAzNi4yNS0zNi4yNSAxNi42Nzh6Ii8+PHBhdGggc3Ryb2tlPSIjRjlCQzYwIiBkPSJNMTU4NCA2NzcuNGw0MiAyNi4zLTIwLjkgMzkuOSIvPjxwYXRoIGQ9Ik0xMzIwIDgxMy45bDQ0LjEtMjAuNyIgc3Ryb2tlPSIjN0NDNTdDIiBzdHJva2Utd2lkdGg9IjUiLz48cGF0aCBkPSJNNTUyLjIgODA3LjNoMzIiIHN0cm9rZT0iI0Y5QkM2MCIgc3Ryb2tlLXdpZHRoPSI1Ii8+PC9nPjwvc3ZnPg=="></img>
                  <img className="absolute" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYzMiIgaGVpZ2h0PSI4NDciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBmaWxsPSIjRjU4QTZDIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0xMzIzLjM4NiA1MDIuNDY3bDk3LjA4NS0yOC45MjIgMjguOTIyIDk3LjA4Ni05Ny4wODYgMjguOTIxeiIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI2MiAzMSkiPjxjaXJjbGUgc3Ryb2tlPSIjRTE2MTYyIiBzdHJva2Utd2lkdGg9IjUiIGN4PSIyNi4yIiBjeT0iMjYuMyIgcj0iMjYuMiIvPjxwYXRoIGZpbGw9IiNGOUJDNjAiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTIxLjY5NSAyOS45NmwzNi4yNS0xNi42NzkgMTYuNjc4IDM2LjI1LTM2LjI1IDE2LjY3OHoiLz48L2c+PHBhdGggZD0iTTI2NC42IDM0MS4zbC0yNS40LTIwLjQiIHN0cm9rZT0iIzdDQzU3QyIgc3Ryb2tlLXdpZHRoPSI1Ii8+PHBhdGggZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMTM4My43MTggOTAuMzIxbDguNzEyLTM0LjAwMiAzNC4wMDIgOC43MTItOC43MTIgMzQuMDAyeiIvPjwvZz48L3N2Zz4="></img>
                  <img className="absolute" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYzMiIgaGVpZ2h0PSI4NDciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSI+PGNpcmNsZSBmaWxsPSIjQTNBOEQ0IiBjeD0iMTE3Ny42IiBjeT0iMzYyLjUiIHI9IjYxLjkiLz48Y2lyY2xlIGZpbGw9IiNGOUJDNjAiIGN4PSIxMjIzLjUiIGN5PSIxNTEuMSIgcj0iMzIuNSIvPjxwYXRoIGZpbGw9IiNGOUJDNjAiIGQ9Ik0xMTUuNTcgMTY3LjkxbDM5LjExMi0xMC4xMiAxMC4xMiAzOS4xMTEtMzkuMTExIDEwLjEyeiIvPjwvZz48L3N2Zz4="></img>
                  <img className="absolute" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYzMiIgaGVpZ2h0PSI4NDciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iI0U4RTRFNiIgZD0iTTE0MDMuNjI0IDM3MC4yNjhsMTQzLjg1Ni00Mi44NTMgNDIuODUzIDE0My44NTYtMTQzLjg1NiA0Mi44NTN6Ii8+PHBhdGggZmlsbD0iIzdDQzU3QyIgZD0iTTc0Ny45IDgxMS44bDc5LjcgMzQuNiA1LjUtNzguMXoiLz48cGF0aCBmaWxsPSIjRjlCQzYwIiBkPSJNOTMzLjcgMTA2LjlsNzAuMiA5NCA0OS4yLTM2LjggNjUuOCA4Ny45LTEwNS44IDc5LjEtMTM2LTE4MS45eiIvPjwvZz48L3N2Zz4="></img>
                  <img className="absolute" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYzMiIgaGVpZ2h0PSI4NDciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iI0U4RTRFNiIgZD0iTTEwMTUuMDA1IDYyNS42MmwxNzYuOTItNTIuNzA0IDUyLjcwNCAxNzYuOTItMTc2LjkyIDUyLjcwNHoiLz48cGF0aCBmaWxsPSIjRTdFQUY2IiBkPSJNNDY0LjggMjE5LjdsLTc0LjMgMTQxLjIgMTQyLjMgMjAuNnoiLz48cGF0aCBmaWxsPSIjRThFNEU2IiBkPSJNNjcyLjkyNiA2OS40MjFsMjMyLjctNjkuMzIgNjkuMzE5IDIzMi43LTIzMi43IDY5LjMyeiIvPjwvZz48L3N2Zz4="></img>
                  <img className="relative z-30" src="https://pine.io/static/pine-app-header-0d498817fa121c2506e3b61580d2b31e.svg"></img>
                </div>
              </div>
            </div>
          </section>
          <section className="px-4 mt-24 sm:mt-64 lg:max-w-6xl lg:self-center">
            <div className="mt-24 text-center">
              <h3 className="font-bold leading-relaxed text-3xl sm:text-2.5rem">Pine is Everywhere.</h3>
              <p className="mt-8 sm:leading-relaxed">
                Pine is a responsive web app. Use it anywhere with just your browser!
                <br />
                Don't like web apps? Don't worry, dedicated apps for Mac, iOS, and Android are coming soon!
              </p>
            </div>
            <div className="mt-24 flex justify-center">
              <img className="w-full max-w-6xl object-contain" src="https://pine.io/static/pine-productivity-responsive-web-app-e6cf5f2a1da8eedfd7def0c0a4a97fbf.png" alt="Pine, Responsive productivity Web App"></img>
            </div>
          </section>
          <section className="px-4 mt-16 lg:max-w-6xl lg:self-center">
            <div className="mt-16 text-center">
              <h3 className="font-bold leading-relaxed text-3xl sm:text-2.5rem">Write with Pine.</h3>
              <h5 className="mt-3 opacity-75 leading-tight sm:leading-tighter sm:text-xl">Pine notes are simple to use, elegant and powerful.</h5>
            </div>
            <div className="sm:flex sm:flex-col lg:flex-row">
              <div className="mt-8 sm:order-last sm:mt-16">
                <div className="p-6 rounded-lg text-center lg:text-left hover:bg-gray-100">
                  <div className="mx-auto lg:mx-0 w-8 h-8 flex justify-center items-center rounded-full bg-red-500">
                    <svg className="fill-none text-white" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>
                  </div>
                  <h5 className="mt-4 sm:font-medium sm:text-xl">Simple yet powerful</h5>
                  <p className="mt-4 opacity-50 leading-relaxed">Pine Notes are simple enough for quick memos, yet powerful enough to write a novel.</p>
                </div>
                <div className="mt-8 lg:mt-4 p-6 rounded-lg text-center lg:text-left hover:bg-gray-100">
                  <div className="mx-auto lg:mx-0 w-8 h-8 flex justify-center items-center rounded-full bg-red-500">
                    <svg className="fill-none text-white" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>
                  </div>
                  <h5 className="mt-4 sm:font-medium sm:text-xl">Version control</h5>
                  <p className="mt-4 opacity-50 leading-relaxed">Save a version of your work at any point in time. Never lose it.</p>
                </div>
                <div className="mt-8 lg:mt-4 p-6 rounded-lg text-center lg:text-left hover:bg-gray-100">
                  <div className="mx-auto lg:mx-0 w-8 h-8 flex justify-center items-center rounded-full bg-red-500">
                    <svg className="fill-none text-white" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
                  </div>
                  <h5 className="mt-4 sm:font-medium sm:text-xl">Share your notes</h5>
                  <p className="mt-4 opacity-50 leading-relaxed">Pine lets you share your notes with a simple weblink. Get your writing online with a single click, keep it updated automatically.</p>
                </div>
              </div>
              <div className="mt-8 flex justify-center">
                <img className="w-full max-w-6xl object-contain" src="https://pine.io/static/pine-writing-note-taking-web-app-feb088b32d959d0d1c5bc91c5d4dd187.png" alt="Pine, note taking web app"></img>
              </div>
            </div>
          </section>
          <section className="px-4 mt-16 sm:mt-48 lg:max-w-6xl lg:self-center">
            <div className="mt-16 text-center">
              <h3 className="font-bold leading-relaxed text-3xl sm:text-2.5rem">Check off your work with Pine.</h3>
              <h5 className="mt-3 opacity-75 leading-tight sm:leading-tighter sm:text-xl">Your todo list always nearby</h5>
            </div>
            <div className="sm:flex sm:flex-col lg:flex-row">
              <div className="mt-12 sm:mt-16 lg:w-3/5">
                <div className="p-6 rounded-lg text-center lg:text-left hover:bg-gray-100">
                  <div className="mx-auto lg:mx-0 w-8 h-8 flex justify-center items-center rounded-full bg-red-500">
                    <svg className="fill-none text-white" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                  </div>
                  <h5 className="mt-4 sm:font-medium sm:text-xl">Pine Todos are everything you hope they'd be.</h5>
                  <p className="mt-4 opacity-50 leading-relaxed">Dates, recurrences, colored labels, tags, comments, smart parsing, they have the lot!</p>
                </div>
                <div className="mt-8 lg:mt-4 p-6 rounded-lg text-center lg:text-left hover:bg-gray-100">
                  <div className="mx-auto lg:mx-0 w-8 h-8 flex justify-center items-center rounded-full bg-red-500">
                    <svg className="fill-none text-white" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
                  </div>
                  <h5 className="mt-4 sm:font-medium sm:text-xl">Share your progress</h5>
                  <p className="mt-4 opacity-50 leading-relaxed">Keep your friends updated, share your project's to-do list with everyone involved, they'll see the progress live</p>
                </div>
              </div>
              <div className="mt-8 flex justify-center">
                <img className="w-full max-w-6xl object-contain" src="https://pine.io/static/pine-task-manager-todo-web-app-a3e25bbfef87c48e346ce525218c05de.png" alt="Pine, Task Manager, Todo App"></img>
              </div>
            </div>
          </section>
          <section className="px-4 mt-16 sm:mt-48 lg:max-w-6xl lg:self-center">
            <div className="text-center">
              <h3 className="font-bold leading-relaxed text-3xl sm:text-2.5rem">Track your Habits with Pine.</h3>
              <h5 className="mt-3 opacity-75 leading-tight sm:leading-tighter sm:text-xl">Developing new habits can be hard. Pine makes it easy.</h5>
            </div>
            <div className="sm:flex sm:flex-col lg:flex-row">
              <div className="mt-12 sm:order-last sm:mt-16">
                <div className="p-6 rounded-lg text-center lg:text-left hover:bg-gray-100">
                  <div className="mx-auto lg:mx-0 w-8 h-8 flex justify-center items-center rounded-full bg-red-500">
                    <svg className="fill-none text-white" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path></svg>
                  </div>
                  <h5 className="mt-4 sm:font-medium sm:text-xl">Like recurring todos on steroids</h5>
                  <p className="mt-4 opacity-50 leading-relaxed">Pine Habits track your streaks and other stats, let you leave comments and measure every session.</p>
                </div>
                <div className="mt-8 lg:mt-4 p-6 rounded-lg text-center lg:text-left hover:bg-gray-100">
                  <div className="mx-auto lg:mx-0 w-8 h-8 flex justify-center items-center rounded-full bg-red-500">
                    <svg className="fill-none text-white" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
                  </div>
                  <h5 className="mt-4 sm:font-medium sm:text-xl">Track progress</h5>
                  <p className="mt-4 opacity-50 leading-relaxed">Create custom trackers for any habit, measure your progress for anything.</p>
                </div>
              </div>
              <div className="mt-8 flex justify-center">
                <img className="w-full max-w-6xl object-contain" src="https://pine.io/static/pine-habit-tracker-web-app-01ba6f00d399625a82f5a004f01b0aa4.png" alt="Pine, Habit Tracking web app"></img>
              </div>
            </div>
          </section>
          <section className="px-4 mt-16 sm:mt-48 lg:max-w-6xl lg:self-center">
            <div className="text-center">
              <h3 className="font-bold leading-relaxed text-3xl sm:text-2.5rem">Do much more with Pine.</h3>
              <h5 className="mt-3 opacity-75 leading-tight sm:leading-tighter sm:text-xl">Organize, bookmark, upload.</h5>
            </div>
            <div className="sm:flex sm:flex-col lg:flex-row">
              <div className="mt-12 sm:mt-16 lg:w-3/5">
                <div className="p-6 rounded-lg text-center lg:text-left hover:bg-gray-100">
                  <div className="mx-auto lg:mx-0 w-8 h-8 flex justify-center items-center rounded-full bg-red-500">
                    <svg className="fill-none text-white" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path></svg>
                  </div>
                  <h5 className="mt-4 sm:font-medium sm:text-xl">Organize in Space and Time</h5>
                  <p className="mt-4 opacity-50 leading-relaxed">Use Boards to drag-and-drop your content close together. All your work is recorded in a timeline so that you could see what you did in the past and what you'll need to do today and in the future</p>
                </div>
                <div className="mt-8 lg:mt-4 p-6 rounded-lg text-center lg:text-left hover:bg-gray-100">
                  <div className="mx-auto lg:mx-0 w-8 h-8 flex justify-center items-center rounded-full bg-red-500">
                    <svg className="fill-none text-white" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
                  </div>
                  <h5 className="mt-4 sm:font-medium sm:text-xl">Bookmark websites</h5>
                  <p className="mt-4 opacity-50 leading-relaxed">Keep the links you want to bookmark together with your projects.</p>
                </div>
                <div className="mt-8 lg:mt-4 p-6 rounded-lg text-center lg:text-left hover:bg-gray-100">
                  <div className="mx-auto lg:mx-0 w-8 h-8 flex justify-center items-center rounded-full bg-red-500">
                    <svg className="fill-none text-white" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 16 12 12 8 16"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline></svg>
                  </div>
                  <h5 className="mt-4 sm:font-medium sm:text-xl">File upload</h5>
                  <p className="mt-4 opacity-50 leading-relaxed">Upload files, keep them close to your work and preview all media directly in Pine!</p>
                </div>
              </div>
              <div className="mt-8 flex justify-center">
                <img className="w-full max-w-6xl object-contain" src="https://pine.io/static/pine-organizer-productivity-web-app-49cab2c03e87fd785eacff66b60c0f18.png" alt="Pine, Organizer, Productivity web app"></img>
              </div>
            </div>
          </section>
          <section className="px-4 mt-16 sm:mt-48 lg:max-w-6xl lg:self-center">
            <div className="text-center">
              <h3 className="font-bold leading-relaxed text-3xl sm:text-2.5rem">Pine is made with Love.</h3>
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
          <section id="signup" className="pt-24 sm:flex relative sm:justify-center z-20">
            <div className="px-4 sm:px-8 sm:py-12 sm:max-w-lg bg-white sm:shadow-2xl sm:rounded-2xl">
              <div>
                <h3 className="text-center font-bold leading-relaxed text-3xl sm:text-2.5rem">Sign up Today!</h3>
                <h5 className="mt-3 opacity-75 text-center leading-relaxed">
                  Pine is currently in an open Beta.
                  <br />
                  Sign up to try it out before the official release!
                </h5>
                <div className="flex justify-center">
                  <button className="py-4 px-8 mt-8 flex items-center leading-tight rounded-2xl opacity-75 bg-red-700 text-white font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.8 10H12v4h5.7c-.8 2.3-3 4-5.7 4-3.3 0-6-2.7-6-6s2.7-6 6-6c1.7 0 3.2.7 4.2 1.8L19 5c-1.7-1.9-4.2-3-7-3C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10c0-.7-.1-1.4-.2-2z"></path></svg>
                    <span className="ml-2">Sign up with Google</span>
                  </button>
                </div>
              </div>
              <div className="mt-8 flex justify-center items-center opacity-50">
                <span className="ml-6 flex-grow border-t border-gray-700"></span>
                <span className="w-12 text-center text-gray-700">OR</span>
                <span className="mr-6 flex-grow border-t border-gray-700"></span>
              </div>
              <form className="mt-8">
                <input className="p-4 w-full rounded-lg bg-gray-200" placeholder="Email" />
                <input className="mt-8 p-4 w-full rounded-lg bg-gray-200" placeholder="Password" />
                <div className="flex justify-center">
                  <button className="mt-8 py-4 px-8 mt-8 text-center leading-tight rounded-2xl opacity-75 bg-red-700 text-white font-medium">Sign up with Google</button>
                </div>
                <div className="mt-8 mx-8 text-xs text-gray-900 leading-tighter opacity-50">
                  By clicking “Sign up with Google/Email” above, you acknowledge that you have read and understood, and agree to Pine's <a className="underline" href="https://pine.io/terms-and-conditions" target="_blank">Terms and Conditions</a> and <a className="text-blue-500" href="https://pine.io/privacy-policy" target="_blank">Privacy Policy</a>.
                </div>
              </form>
            </div>
          </section>
          <div className="hidden sm:block relative">
            <img className="absolute bottom-0 z-10" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIyMDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMjcuMjU1QzIwMC42NTEtMjQuNiA1MzIuMTc3LTIuNDYgOTk0LjU3OCA5My42NzFjNDYyLjQwMSA5Ni4xMzMgNzcwLjg3NSA5OC43MjggOTI1LjQyMiA3Ljc4NlYyMDhIMFYyNy4yNTV6IiBmaWxsPSIjMWMyNDJiIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4K"></img>
            <img className="max-w-3xl hidden lg:block absolute bottom-0 left-46% z-0" src="https://pine.io/static/pine-app-footer-6dfb2a79cf4da639c8d93d2153f3313a.svg"></img>
            <img className="max-w-3xl hidden lg:block absolute bottom-24 -left-9% z-0" src="https://pine.io/static/pine-app-footer-2-e571ceb73cbeff223b59115c420b10a3.svg"></img>
          </div>
        </main>
        <footer className="px-12 pt-8 pb-16 lg:pt-16 lg:pb-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-gray-900 text-white">
          <div className="mt-3 pb-3">
            <p className="block uppercase text-xs leading-1.2rem">Product</p>
            <a className="mt-6 block opacity-50 text-sm leading-1.4rem" href="#signup">Sign up</a>
            <a className="mt-3 block opacity-50 text-sm leading-1.4rem" href="https://app.pine.io/login">Log in</a>
          </div>
          <div className="mt-3 pb-3">
            <p className="block uppercase text-xs leading-1.2rem">Learn More</p>
            <a className="mt-6 block opacity-50 text-sm leading-1.4rem" href="https://pine.io/blog">Blog</a>
            <a className="mt-3 block opacity-50 text-sm leading-1.4rem" href="https://pine.io/changelog">Changelog</a>
            <a className="mt-3 block opacity-50 text-sm leading-1.4rem" href="https://pine.io/pricing">Pricing</a>
          </div>
          <div className="mt-3 pb-3">
            <p className="block uppercase text-xs leading-1.2rem">Legal</p>
            <a className="mt-6 block opacity-50 text-sm leading-1.4rem" href="https://pine.io/terms-and-conditions">Terms and Conditions</a>
            <a className="mt-3 block opacity-50 text-sm leading-1.4rem" href="https://pine.io//privacy-policy">Privacy Policy</a>
          </div>
          <div className="mt-3 pb-3">
            <p className="block uppercase text-xs leading-1.2rem">Social</p>
            <a className="mt-6 block opacity-50 text-sm leading-1.4rem" href="https://twitter.com/pine_io" target="_blank">Twitter</a>
            <a className="mt-3 block opacity-50 text-sm leading-1.4rem" href="https://www.facebook.com/Pine-101159617963307" target="_blank">Facebook</a>
            <a className="mt-3 block opacity-50 text-sm leading-1.4rem" href="mailto:hello@pine.io">Email</a>
          </div>
        </footer>
      </div>
    );
  }
}

export default IndexPage;
