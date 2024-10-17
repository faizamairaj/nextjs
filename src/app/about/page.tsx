
export default async function Aboutpage () {
    await new Promise((resolve) =>{
        setTimeout(resolve, 5000);
    });
    return (
        <div className="bg-yellow-200  font-bold text-purple-600 text-center">
            <h1>About page 📟</h1>
            <p>
                <img src="https://st2.depositphotos.com/3591429/10464/i/450/depositphotos_104648666-stock-photo-group-of-people-brainstorming-on.jpg"      width={900} alt="" />
            </p>
        </div>
    );
}