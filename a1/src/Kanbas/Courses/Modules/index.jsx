export default function Modules() {
    return (
        <div className="p-6">

            <div className="flex justify-end mb-8 mr-8 space-x-4">
                <div className="join">
                    <button className="btn join-item">Collapse All</button>
                    <button className="btn join-item">View Progress</button>
                    <select className="select font-semibold bg-base-200 join-item">
                        <option>Publish All</option>
                    </select>
                    <button className="btn btn-primary join-item">+ Module</button>
                </div>
            </div>

            <p className="text-info-content mb-6">This introductory course provides an exploration of music from the Muggle world, with a focus on a renowned country-pop artist whose work has transcended genres and generations. Students will examine how the artist's lyrics reflect themes of love, resilience, and self-discovery, resonating with both Muggles and wizards alike. The course will delve into how these themes connect with key moments in wizarding history and magical folklore. This course satisfies the diversity requirement.</p>


            <ul id="wd-modules" className="space-y-6">
                {/* Week 1 */}
                <li className="wd-module">
                    <div className="wd-title text-xl font-bold mb-2">Week 1</div>
                    <ul className="wd-lessons space-y-4 pl-4">
                        <li className="wd-lesson">
                            <span className="wd-title text-lg font-semibold">LEARNING OBJECTIVES</span>
                            <ul className="wd-content list-disc list-inside pl-4 mt-2 text-info-content">
                                <li className="wd-content-item">Introduction to muggle music</li>
                                <li className="wd-content-item">Analyze the influence of country and pop genres on Muggle society and their cultural significance.</li>
                            </ul>
                        </li>
                    </ul>
                </li>

                {/* Week 2 */}
                <li className="wd-module">
                    <div className="wd-title text-xl font-bold mb-2">Week 2</div>
                    <ul className="wd-lessons space-y-4 pl-4">
                        <li className="wd-lesson">
                            <span className="wd-title text-lg font-semibold">LEARNING OBJECTIVES</span>
                            <ul className="wd-content list-disc list-inside pl-4 mt-2 text-info-content">
                                <li className="wd-content-item">Examine the role of storytelling in Muggle music and how it conveys powerful narratives.</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}
