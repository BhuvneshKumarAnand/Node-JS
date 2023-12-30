  // import events from "events";

  // class FitnessTracker extends events.EventEmitter {
  //     constructor() {
  //         super();
  //         this.progress = 0;
  //         this.goal = 1000;
  //     }

  //     addExercise(exercise) {
  //         // Write code to update the progress and emit a 'goalReached' event when the goal is reached
  //         //update the progress based on calories burned
  //         this.progress += exercise.caloriesBurned;

  //         //check if the goal is reached
  //         if (this.progress >= this.goal) {
  //             // Emit "goalReached" event with the current progress
  //             this.emit('goalReached', this.progress);
  //         }
  //     }
  // }

  // const Solution = () => {
  //     // define  listener that sends a congratulatory message to the user upon reaching their fitness goal

  //     // congratulatory message
  //     const tracker = new FitnessTracker();

  //     tracker.on('goalReached', () => {
  //         console.log("Congratulations! You have reached your fitness goal.");
  //     });
  //     // simulate adding exercise
  //     tracker.addExercise({ name: "Running", caloriesBurned: 500 });
  //     tracker.addExercise({ name: "Weightlifting", caloriesBurned: 600 });
  // };

  // Solution();

  // export { FitnessTracker, Solution };

  // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  import events from "events";

  class FitnessTracker extends events.EventEmitter {
      constructor() {
          super();
          this.progress = 0;
          this.goal = 1000;
      }

      addExercise(exercise) {
          // simulate adding exercise
          this.progress += exercise.caloriesBurned;
          if (this.progress >= this.goal) {
              this.emit("goalReached");
          }
      }
  }

  const Solution = () => {
      const tracker = new FitnessTracker();

      tracker.addListener("goalReached", () => {
          console.log("Congratulations! You have reached your fitness goal.");
      });

      // simulate adding exercise
      tracker.addExercise({ name: "Running", caloriesBurned: 500 });
      tracker.addExercise({ name: "Weightlifting", caloriesBurned: 600 });
  };

  Solution();

  export { FitnessTracker, Solution };