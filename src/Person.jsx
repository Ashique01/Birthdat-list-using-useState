const Person = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { name, image, age } = person;
        return (
          <div className="d-flex">
            <div className="align-self-center">
              <img
                src={image}
                style={{ width: "4rem", height: "4rem", borderRadius: "50%" }}
              />
            </div>
            <div className="mx-5 mt-3">
              <h5 className="font-monospace fw-bolder">{name}</h5>
              <p className="text-secondary fw-bold">{age}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default Person;
