import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Products() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section>
        <img
          src="img-1.jpg"
          alt="person with dog overlooking mountain with sunset"
        />
        <div>
          <h2>About WorldWide.</h2>
          <p>
            &quot;WorldWide&quot; is a term often used to denote something that
            extends across the entire world or has a global reach. It can be
            applied to various contexts, including:
          </p>
          <p>
            Encompasses the transportation of goods and products across
            international borders. It involves logistics, shipping, and customs
            processes to facilitate the movement of goods between countries.
          </p>
        </div>
      </section>
    </main>
  );
}
