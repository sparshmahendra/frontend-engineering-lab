export default function BeginnerModalPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-4xl">
        <header>
          <p className="text-sm font-medium uppercase tracking-wide text-gray-500">
            Frontend Engineering Lab
          </p>

          <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900">
            Modal — Beginner
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-gray-600">
            Build a simple modal using basic React concepts.
          </p>
        </header>

        <div className="mt-10 space-y-8">
          <section className="rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">
              Goal
            </h2>

            <p className="mt-3 text-gray-600">
              Learn how a basic modal works using React state,
              conditional rendering, event handling, and CSS.
            </p>
          </section>

          <section className="rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">
              Scenario
            </h2>

            <p className="mt-3 text-gray-600">
              You are building a settings page. When the user clicks
              a button, a modal should appear containing some
              information. The user should be able to close the modal
              using a close button.
            </p>
          </section>

          <section className="rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">
              Requirements
            </h2>

            <ul className="mt-4 space-y-2 text-gray-600">
              <li>• Open when the user clicks a button.</li>
              <li>• Close when the user clicks the close button.</li>
              <li>• Display a title.</li>
              <li>• Display content.</li>
              <li>• Display a backdrop.</li>
              <li>• Center the modal on the screen.</li>
            </ul>
          </section>

          <section className="rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">
              Constraints
            </h2>

            <ul className="mt-4 space-y-2 text-gray-600">
              <li>• Use React state.</li>
              <li>• Use basic JSX.</li>
              <li>• Use basic CSS.</li>
              <li>• Do not use a UI component library.</li>
              <li>• Do not use a modal library.</li>
              <li>• Do not use React portals.</li>
              <li>• Do not use external state management.</li>
            </ul>
          </section>

          <section className="rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">
              Tasks
            </h2>

            <ol className="mt-4 list-decimal space-y-3 pl-5 text-gray-600">
              <li>
                Create state representing whether the modal is open.
              </li>
              <li>
                Create a button that opens the modal.
              </li>
              <li>
                Render the modal only when it is open.
              </li>
              <li>
                Add a close button.
              </li>
              <li>
                Add a backdrop.
              </li>
              <li>
                Center the modal on the screen.
              </li>
            </ol>
          </section>

          <section className="rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">
              Definition of Done
            </h2>

            <ul className="mt-4 space-y-3 text-gray-600">
              <li>☐ Modal starts closed.</li>
              <li>☐ Open button displays the modal.</li>
              <li>☐ Modal displays the expected content.</li>
              <li>☐ Close button closes the modal.</li>
              <li>☐ Backdrop appears behind the modal.</li>
              <li>☐ Modal is centered.</li>
              <li>☐ No external UI libraries are used.</li>
            </ul>
          </section>

          <section className="rounded-xl border bg-gray-900 p-6 text-white">
            <h2 className="text-xl font-semibold">
              What You Are Not Solving Yet
            </h2>

            <ul className="mt-4 space-y-2 text-gray-300">
              <li>• Escape-to-close</li>
              <li>• Focus management</li>
              <li>• Focus restoration</li>
              <li>• Screen-reader behavior</li>
              <li>• Body scroll locking</li>
              <li>• React portals</li>
              <li>• Compound components</li>
              <li>• Controlled/uncontrolled APIs</li>
              <li>• Advanced animations</li>
              <li>• SSR considerations</li>
            </ul>
          </section>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/sparshmahendra/frontend-engineering-lab/tree/main/components/modal/beginner"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-black px-5 py-3 font-medium text-white hover:bg-gray-800"
            >
              Open Exercise Files
            </a>

            <a
              href="/modal/beginner/solution"
              className="rounded-lg border border-gray-300 bg-white px-5 py-3 font-medium text-gray-900 hover:bg-gray-50"
            >
              View Reference Solution
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
