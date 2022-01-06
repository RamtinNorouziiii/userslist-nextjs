import Link from "next/link";
import styles from "../../styles/users.module.css";
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: { users: data },
  };
};
const UsersList = ({ users }) => {
  return (
    <div>
      <h1>All Users</h1>
      {users.map((users) => {
        return (
          <Link key={users.id} href={"/users/"+users.id}>
            <a className={styles.single}>
              <h3>{users.name}</h3>
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default UsersList;
