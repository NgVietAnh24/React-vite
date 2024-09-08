import './styles.css'

const MyComponent = () => {
    const arrays = {
        name: "Nguyen Viet Anh",
        birthday: {
            day: 24,
            moth: 4,
            year: 2004,
        },
    };
    return (
        <>
            <div className="one">
                {JSON.stringify(arrays.name)}
            </div>
            <div style={{ fontStyle: 'italic' }}>birthday: {arrays.birthday.day}</div>
        </>
    );
}

export default MyComponent;