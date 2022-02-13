import classes from './HomeMain.module.scss';

export default function HomeMain() {
    return (
        <main className={classes.Main}>
            <article>
                <h5>SO, YOU WANT TO TRAVEL TO SPACE</h5>
                <h1>Space</h1>
                <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
            </article>
            <div>
                <button>
                    Explore
                </button>
            </div>
        </main>
    );
}