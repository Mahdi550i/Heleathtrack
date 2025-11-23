import { useState, useEffect } from "react";
import ActivityForm from "../components/ActivityForm";
import ActivityList from "../components/ActivityList";

const KEY = "healthtrack-data";

export default function Dashboard() {
  const [activities, setActivities] = useState([]);
  const [meals, setMeals] = useState([]);
  const [workouts, setWorkouts] = useState([]);

  // Load on start
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(KEY));
    if (saved) {
      setActivities(saved.activities || []);
      setMeals(saved.meals || []);
      setWorkouts(saved.workouts || []);
    }
  }, []);

  // Save on change
  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify({ activities, meals, workouts }));
  }, [activities, meals, workouts]);

  return (
    <section className="max-w-6xl mx-auto px-4 py-8 space-y-8">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Activities */}
        <div className="bg-white border rounded-xl p-6 shadow-sm flex flex-col min-h-[350px] overflow-auto">
          <h2 className="font-semibold text-xl mb-4">Daily Activities</h2>
          <div className="mb-4">
            <ActivityForm
              placeholder="Add an activity..."
              onAdd={(item) => setActivities([...activities, item])}
            />
          </div>
          <div className="flex-1 overflow-y-auto">
            <ActivityList items={activities} unit="minutes" />
          </div>
        </div>

        {/* Meals */}
        <div className="bg-white border rounded-xl p-6 shadow-sm flex flex-col min-h-[350px] overflow-auto">
          <h2 className="font-semibold text-xl mb-4">Meals</h2>
          <div className="mb-4">
            <ActivityForm
              placeholder="Add a meal..."
              onAdd={(item) => setMeals([...meals, item])}
            />
          </div>
          <div className="flex-1 overflow-y-auto">
            <ActivityList items={meals} unit="kcal" />
          </div>
        </div>

        {/* Workouts */}
        <div className="bg-white border rounded-xl p-6 shadow-sm flex flex-col min-h-[350px] overflow-auto">
          <h2 className="font-semibold text-xl mb-4">Workouts</h2>
          <div className="mb-4">
            <ActivityForm
              placeholder="Add a workout..."
              onAdd={(item) => setWorkouts([...workouts, item])}
            />
          </div>
          <div className="flex-1 overflow-y-auto">
            <ActivityList items={workouts} unit="minutes" />
          </div>
        </div>
      </div>
    </section>
  );
}
