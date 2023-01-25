import { Name } from "./Person.types";

type PersonListProps = {
  names: Name[];
};

export const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.names.map((each) => {
        return (
          <h2 key={each.firstName}>
            {each.firstName} {each.lastName}
          </h2>
        );
      })}
    </div>
  );
};
