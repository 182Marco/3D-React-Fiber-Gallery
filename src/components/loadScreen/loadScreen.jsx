import { useLoadScreen } from "./loadScreen.hook";
import "./styles.scss";

const LoadScreen = ({ started, onStarted }) => {
  const h = useLoadScreen();
  return (
    <>
      {!h.removeElement && (
        <div className={`loadingScreen ${started ? "start" : ""}`}>
          <h1>The Carriage of Destiny!</h1>
          <main>
            <button disabled={h.progress < 100} onClick={onStarted}>
              Start
            </button>
          </main>
          {!h.startedExperience && (
            <section>
              <span>{h.progress.toFixed(0)}%</span>
              <div
                style={{
                  width: `${h.progress}%`,
                }}
              />
            </section>
          )}
        </div>
      )}
    </>
  );
};

export { LoadScreen };
