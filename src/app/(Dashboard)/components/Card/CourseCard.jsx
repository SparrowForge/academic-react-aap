import React from 'react';

const CourseCard = () => {
    return (
        <div>
      <main className="flex-1 overflow-y-auto p-6 bg-muted/10">
        <div className="max-w-7xl mx-auto space-y-6">
          <h2 className="text-2xl font-bold">Welcome back, John!</h2>

          {/* Stats Cards */}
        <SummaryCard/>

          {/* Courses Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
              <h3 className="text-lg font-semibold">Your Courses</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Course Card Example */}
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden">
                  <div
                    className="h-32"
                    style={{
                      background: "linear-gradient(to right, rgb(167, 115, 42), rgb(249, 244, 142))",
                    }}
                  ></div>
                  <div className="p-4 space-y-2">
                    <h3 className="font-semibold truncate">Advanced Mathematics</h3>
                    <p className="text-sm text-muted-foreground">Dr. Sarah Johnson</p>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span>Progress</span>
                        <span>65%</span>
                      </div>
                      <div className="relative w-full overflow-hidden rounded-full bg-secondary h-1">
                        <div
                          className="h-full bg-primary transition-all"
                          style={{ width: '65%' }}
                        ></div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 pt-2 text-xs">
                      <div className="bg-muted rounded p-2">
                        <p className="text-muted-foreground">Next Class:</p>
                        <p className="font-medium">Monday, 10:00 AM</p>
                      </div>
                      <div className="rounded p-2 bg-orange-500/10 text-orange-500">
                        <p className="text-muted-foreground">Assignments:</p>
                        <p className="font-medium">2 due</p>
                      </div>
                    </div>
                  </div>
                  <button className="inline-flex items-center justify-center w-full h-10 border-t hover:bg-muted px-4 py-2 text-sm font-medium">
                    Enter Course
                  </button>
                </div>
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden">
                  <div
                    className="h-32"
                    style={{
                      background: "linear-gradient(to right, rgb(167, 115, 42), rgb(249, 244, 142))",
                    }}
                  ></div>
                  <div className="p-4 space-y-2">
                    <h3 className="font-semibold truncate">Advanced Mathematics</h3>
                    <p className="text-sm text-muted-foreground">Dr. Sarah Johnson</p>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span>Progress</span>
                        <span>65%</span>
                      </div>
                      <div className="relative w-full overflow-hidden rounded-full bg-secondary h-1">
                        <div
                          className="h-full bg-primary transition-all"
                          style={{ width: '65%' }}
                        ></div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 pt-2 text-xs">
                      <div className="bg-muted rounded p-2">
                        <p className="text-muted-foreground">Next Class:</p>
                        <p className="font-medium">Monday, 10:00 AM</p>
                      </div>
                      <div className="rounded p-2 bg-orange-500/10 text-orange-500">
                        <p className="text-muted-foreground">Assignments:</p>
                        <p className="font-medium">2 due</p>
                      </div>
                    </div>
                  </div>
                  <button className="inline-flex items-center justify-center w-full h-10 border-t hover:bg-muted px-4 py-2 text-sm font-medium">
                    Enter Course
                  </button>
                </div>
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden">
                  <div
                    className="h-32"
                    style={{
                      background: "linear-gradient(to right, rgb(167, 115, 42), rgb(249, 244, 142))",
                    }}
                  ></div>
                  <div className="p-4 space-y-2">
                    <h3 className="font-semibold truncate">Advanced Mathematics</h3>
                    <p className="text-sm text-muted-foreground">Dr. Sarah Johnson</p>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span>Progress</span>
                        <span>65%</span>
                      </div>
                      <div className="relative w-full overflow-hidden rounded-full bg-secondary h-1">
                        <div
                          className="h-full bg-primary transition-all"
                          style={{ width: '65%' }}
                        ></div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 pt-2 text-xs">
                      <div className="bg-muted rounded p-2">
                        <p className="text-muted-foreground">Next Class:</p>
                        <p className="font-medium">Monday, 10:00 AM</p>
                      </div>
                      <div className="rounded p-2 bg-orange-500/10 text-orange-500">
                        <p className="text-muted-foreground">Assignments:</p>
                        <p className="font-medium">2 due</p>
                      </div>
                    </div>
                  </div>
                  <button className="inline-flex items-center justify-center w-full h-10 border-t hover:bg-muted px-4 py-2 text-sm font-medium">
                    Enter Course
                  </button>
                </div>

              </div>
            </div>

            {/* right-hand sidebar  */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Reminders</h3>
              <div className="p-4 border rounded-lg bg-muted text-muted-foreground">
                No upcoming reminders.
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    );
};

export default CourseCard;