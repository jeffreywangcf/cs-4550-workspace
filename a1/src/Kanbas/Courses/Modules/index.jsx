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

            <p className="text-info-content mb-6">This introductory course explores Muggle music, focusing on an artist who is a mastermind, casting spells with lyrical brilliance across genres. Known for sparking revolutions in both country and pop, this artist’s work has enchanted listeners across generations. Students will shake off preconceived notions of Muggle music, diving into themes of love and fearless resilience. Throughout the semester, students will analyze how key songs align with magical folklore, the long-lived legacy of wizarding history, and the evermore evolving relationship between magical and non-magical societies. This course satisfies the diversity requirement.</p>


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
