

const SummaryCard = () => {
    return (
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Card 1 */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">Current Courses</p>
                    <h2 className="text-2xl font-bold">5</h2>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center">
                    <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
                    </svg>
                  </div>
                </div>
              </div>
              <button className="inline-flex items-center justify-center w-full h-10 border-t hover:bg-muted px-4 py-2 text-sm font-medium">
                View Courses
              </button>
            </div>

            {/* Card 2 */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">Attendance Rate</p>
                    <h2 className="text-2xl font-bold">95%</h2>
                    <div className="text-xs px-2 py-1 rounded-full w-fit bg-green-500/10 text-green-500">Good Standing</div>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center">
                    <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M8 2v4" />
                      <path d="M16 2v4" />
                      <rect width="18" height="18" x="3" y="4" rx="2" />
                      <path d="M3 10h18" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">Assignments Due</p>
                    <h2 className="text-2xl font-bold">3</h2>
                    <div className="text-xs px-2 py-1 rounded-full w-fit bg-orange-500/10 text-orange-500">Due Soon</div>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center">
                    <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                      <path d="M10 9H8" />
                      <path d="M16 13H8" />
                      <path d="M16 17H8" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">Next Exam</p>
                    <h2 className="text-2xl font-bold">5 May</h2>
                    <div className="text-xs px-2 py-1 rounded-full w-fit bg-muted text-muted-foreground">In 6 Days</div>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center">
                    <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
    );
};

export default SummaryCard;