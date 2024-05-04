const User = {
  name: 'John',
  age: 25,
};

type Props = {};

const PropsSpreadMethod = (props: Props) => {
  return <Profile name={User.name} age={User.age} />;
};

export default PropsSpreadMethod;

const Profile = (props: typeof User) => {
  return (
    <>
      <h1>{props.name}</h1>
      <h2>{props.age}</h2>
    </>
  );
};
