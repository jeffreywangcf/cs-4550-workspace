export default function Lab1() {
  return (
    <div id="wd-lab1" className="max-w-4xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold mb-4">Lab 1</h2>
      <h3 className="text-2xl font-semibold mb-2">HTML Examples</h3>
      <div id="wd-h-tag">
        <h4 className="text-xl font-semibold mb-2">Heading Tags</h4>
        <p className="text-accent-content leading-relaxed">
          Text documents are often broken up into several sections and
          subsections. Each section is usually prefaced with a short title or
          heading that attempts to summarize the topic of the section it
          precedes. For instance this paragraph is preceded by the heading
          Heading Tags. The font of the section headings are usually larger and
          bolder than their subsection headings. This document uses headings to
          introduce topics such as HTML Documents, HTML Tags, Heading Tags, etc.
          HTML heading tags can be used to format plain text so that it renders
          in a browser as large headings. There are 6 heading tags for different
          sizes: h1, h2, h3, h4, h5, and h6. Tag h1 is the largest heading and
          h6 is the smallest heading.
        </p>
      </div>

      <div id="wd-p-tag">
        <h4 className="text-xl font-semibold mb-2">Paragraph Tag</h4>
        <p id="wd-p-1" className="mb-4 text-accent-content leading-relaxed">
          This is a paragraph. We often separate a long set of sentences with
          vertical spaces to make the text easier to read. Browsers ignore
          vertical white spaces and render all the text as one single set of
          sentences. To force the browser to add vertical spacing, wrap the
          paragraphs you want to separate with the paragraph tag.
        </p>
        <p id="wd-p-2" className="mb-4 text-accent-content leading-relaxed">
          This is the first paragraph. The paragraph tag is used to format
          vertical gaps between long pieces of text like this one.
        </p>
        <p id="wd-p-3" className="mb-4 text-accent-content leading-relaxed">
          This is the second paragraph. Even though there is a deliberate white
          gap between the paragraph above and this paragraph, by default
          browsers render them as one contiguous piece of text as shown here on
          the right.
        </p>
        <p id="wd-p-4" className="text-accent-content leading-relaxed">
          This is the third paragraph. Wrap each paragraph with the paragraph
          tag to tell browsers to render the gaps.
        </p>
      </div>

      <div id="wd-lists" className="space-y-4">
        <h4 className="text-xl font-semibold mb-2">List Tags</h4>
        <h5 className="text-lg font-semibold">Ordered List Tag</h5>
        <p>How to make pancakes:</p>
        <ol id="wd-pancakes" className="list-decimal list-inside ml-6">
          <li>Mix dry ingredients.</li>
          <li>Add wet ingredients.</li>
          <li>Stir to combine.</li>
          <li>Heat a skillet or griddle.</li>
          <li>Pour batter onto the skillet.</li>
          <li>Cook until bubbly on top.</li>
          <li>Flip and cook the other side.</li>
          <li>Serve and enjoy!</li>
        </ol>
        <p>Monkey bread recipe:</p>
        <ol
          id="wd-your-favorite-recipe"
          className="list-decimal list-inside ml-6"
        >
          <li>Preheat oven to 350°F (175°C).</li>
          <li>Grease a bundt pan.</li>
          <li>Cut 2 cans of biscuit dough into quarters.</li>
          <li>In a bowl, mix 1 cup of sugar and 2 teaspoons of cinnamon.</li>
          <li>Coat dough pieces in the sugar-cinnamon mixture.</li>
          <li>Layer coated dough pieces into the greased bundt pan.</li>
          <li>
            In a saucepan, melt 1 cup of butter with 1/2 cup of brown sugar.
          </li>
          <li>Pour the butter-brown sugar mixture over the dough.</li>
          <li>Bake for 35-40 minutes until golden brown.</li>
          <li>Cool for 10 minutes, then invert onto a plate and serve warm.</li>
        </ol>
        <h5 className="text-lg font-semibold">Unordered List Tag</h5>
        <p>My favorite books (in no particular order):</p>
        <ul id="wd-my-books" className="list-disc list-inside ml-6">
          <li>1984</li>
          <li>The Great Gatsby</li>
          <li>Twilight</li>
        </ul>
      </div>

      <div id="wd-tables">
        <h4 className="text-xl font-semibold mb-2">Table Tag</h4>
        <table className="min-w-full table-auto">
          <thead className="bg-base-200">
            <tr>
              <th className="border border-base-300 px-4 py-2">Quiz</th>
              <th className="border border-base-300 px-4 py-2">Topic</th>
              <th className="border border-base-300 px-4 py-2">Date</th>
              <th className="border border-base-300 px-4 py-2">Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-base-300 px-4 py-2">Q1</td>
              <td className="border border-base-300 px-4 py-2">HTML</td>
              <td className="border border-base-300 px-4 py-2">2/3/21</td>
              <td className="border border-base-300 px-4 py-2">85</td>
            </tr>
            <tr>
              <td className="border border-base-300 px-4 py-2">Q2</td>
              <td className="border border-base-300 px-4 py-2">CSS</td>
              <td className="border border-base-300 px-4 py-2">2/10/21</td>
              <td className="border border-base-300 px-4 py-2">90</td>
            </tr>
            <tr>
              <td className="border border-base-300 px-4 py-2">Q3</td>
              <td className="border border-base-300 px-4 py-2">JavaScript</td>
              <td className="border border-base-300 px-4 py-2">2/17/21</td>
              <td className="border border-base-300 px-4 py-2">95</td>
            </tr>
          </tbody>
          <tfoot className="bg-base-200">
            <tr>
              <td className="border border-base-300 px-4 py-2" colSpan={3}>
                Average
              </td>
              <td className="border border-base-300 px-4 py-2">90</td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div id="wd-images" className="space-y-4">
        <h4 className="text-xl font-semibold mb-2">Image Tag</h4>
        <p>Loading an image from the internet:</p>
        <img
          id="wd-starship"
          className="rounded shadow-md"
          width="400px"
          src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
          alt="Starship"
        />
        <p>Loading a local image:</p>
        <img
          id="wd-teslabot"
          className="rounded shadow-md w-96"
          src="/images/teslabot.png"
          alt="Teslabot"
        />
      </div>

      <div id="wd-forms" className="space-y-4">
        <h4 className="text-xl font-semibold mb-2">Form Elements</h4>
        <form id="wd-text-fields" className="space-y-4">
          <h5 className="text-lg font-semibold">Text Fields</h5>
          <div>
            <label htmlFor="wd-text-fields-username" className="block">
              Username:
            </label>
            <input
              id="wd-text-fields-username"
              className="border border-base-300 p-2 rounded"
              placeholder="jdoe"
            />
          </div>
          <div>
            <label htmlFor="wd-text-fields-password" className="block">
              Password:
            </label>
            <input
              type="password"
              id="wd-text-fields-password"
              className="border border-base-300 p-2 rounded"
              value="123@#$asd"
            />
          </div>
          <div>
            <label htmlFor="wd-text-fields-first-name" className="block">
              First name:
            </label>
            <input
              type="text"
              id="wd-text-fields-first-name"
              className="border border-base-300 p-2 rounded"
            />
          </div>
          <div>
            <label htmlFor="wd-text-fields-last-name" className="block">
              Last name:
            </label>
            <input
              type="text"
              id="wwd-text-fields-last-name"
              className="border border-base-300 p-2 rounded"
              value="Wonderland"
            />
          </div>
          <h5 className="text-lg font-semibold">Text Boxes</h5>
          <label>Biography:</label>
          <textarea
            id="wd-textarea"
            className="border border-base-300 p-2 rounded w-full"
            cols={30}
            rows={10}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </textarea>

          <h5 className="text-lg font-semibold">Buttons</h5>
          <button
            id="wd-all-good"
            className="btn btn-primary px-4 py-2"
            onClick={() => alert("Life is Good!")}
          >
            Hello World!
          </button>
          <br />
          <input
            type="file"
            className="file-input file-input-bordered file-input-primary w-full max-w-xs"
          />
          <div id="wd-radio-buttons" className="space-y-4">
            <h5 className="text-lg font-semibold">Radio Buttons</h5>
            <label className="block font-medium mb-2">
              Favorite movie genre:
            </label>

            <div className="flex items-center mb-2">
              <input
                type="radio"
                name="radio-genre"
                id="wd-radio-comedy"
                className="radio checked:bg-primary"
              />
              <label htmlFor="wd-radio-comedy" className="ml-2">
                Comedy
              </label>
            </div>

            <div className="flex items-center mb-2">
              <input
                type="radio"
                name="radio-genre"
                id="wd-radio-drama"
                className="radio checked:bg-primary"
              />
              <label htmlFor="wd-radio-drama" className="ml-2">
                Drama
              </label>
            </div>

            <div className="flex items-center mb-2">
              <input
                type="radio"
                name="radio-genre"
                id="wd-radio-scifi"
                className="radio checked:bg-primary"
              />
              <label htmlFor="wd-radio-scifi" className="ml-2">
                Science Fiction
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="radio"
                name="radio-genre"
                id="wd-radio-fantasy"
                className="radio checked:bg-primary"
              />
              <label htmlFor="wd-radio-fantasy" className="ml-2">
                Fantasy
              </label>
            </div>
          </div>

          <div id="wd-checkboxes" className="space-y-4">
            <h5 className="text-lg font-semibold">Checkboxes</h5>
            <label className="block font-medium mb-2">
              Favorite movie genre:
            </label>

            <div className="flex items-center mb-2">
              <input
                type="checkbox"
                name="check-genre"
                id="wd-chkbox-comedy"
                className="checkbox checked:bg-primary"
              />
              <label htmlFor="wd-chkbox-comedy" className="ml-2">
                Comedy
              </label>
            </div>

            <div className="flex items-center mb-2">
              <input
                type="checkbox"
                name="check-genre"
                id="wd-chkbox-drama"
                className="checkbox checked:bg-primary"
              />
              <label htmlFor="wd-chkbox-drama" className="ml-2">
                Drama
              </label>
            </div>

            <div className="flex items-center mb-2">
              <input
                type="checkbox"
                name="check-genre"
                id="wd-chkbox-scifi"
                className="checkbox checked:bg-primary"
              />
              <label htmlFor="wd-chkbox-scifi" className="ml-2">
                Science Fiction
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                name="check-genre"
                id="wd-chkbox-fantasy"
                className="checkbox checked:bg-primary"
              />
              <label htmlFor="wd-chkbox-fantasy" className="ml-2">
                Fantasy
              </label>
            </div>
          </div>

          <div id="wd-dropdowns" className="space-y-4">
            <h5 className="text-lg font-semibold">Dropdowns</h5>

            <label
              htmlFor="wd-select-one-genre"
              className="block font-medium mb-2"
            >
              Favorite movie genre:
            </label>
            <select
              id="wd-select-one-genre"
              className="select select-bordered w-full max-w-xs"
            >
              <option value="COMEDY">Comedy</option>
              <option value="DRAMA">Drama</option>
              <option selected value="SCIFI">
                Science Fiction
              </option>
              <option value="FANTASY">Fantasy</option>
            </select>

            <h5 className="text-lg font-semibold">Select many</h5>
            <label
              htmlFor="wd-select-many-genre"
              className="block font-medium mb-2"
            >
              Favorite movie genres:
            </label>
            <select
              id="wd-select-many-genre"
              className="select select-bordered w-full max-w-xs"
              multiple
            >
              <option selected value="COMEDY">
                Comedy
              </option>
              <option value="DRAMA">Drama</option>
              <option selected value="SCIFI">
                Science Fiction
              </option>
              <option value="FANTASY">Fantasy</option>
            </select>
          </div>

          <div id="wd-other-fields" className="space-y-4">
            <h5 className="text-lg font-semibold">Other HTML Field Types</h5>

            <label
              htmlFor="wd-text-fields-email"
              className="block font-medium mb-2"
            >
              Email:
            </label>
            <input
              type="email"
              id="wd-text-fields-email"
              placeholder="jdoe@somewhere.com"
              className="input input-bordered w-full max-w-xs"
            />

            <label
              htmlFor="wd-text-fields-salary-start"
              className="block font-medium mt-4 mb-2"
            >
              Starting salary:
            </label>
            <input
              type="number"
              id="wd-text-fields-salary-start"
              placeholder="1000"
              value="100000"
              className="input input-bordered w-full max-w-xs"
            />

            <label
              htmlFor="wd-text-fields-rating"
              className="block font-medium mt-4 mb-2"
            >
              Rating:
            </label>
            <input
              type="range"
              id="wd-text-fields-rating"
              max="5"
              value="4"
              className="range range-primary w-full max-w-xs"
            />

            <label
              htmlFor="wd-text-fields-dob"
              className="block font-medium mt-4 mb-2"
            >
              Date of birth:
            </label>
            <input
              type="date"
              id="wd-text-fields-dob"
              value="2000-01-21"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
