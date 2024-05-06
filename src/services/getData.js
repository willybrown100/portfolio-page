export async function getData() {
  try {
    const res = await fetch(
      "https://portfolio-site-x3hc.onrender.com/api/data"
    );
    const data = await res.json();
    console.log(data);
    return data
  } catch (error) {
    console.log(error)
  }
}
export async function getStatistics() {
  try {
    const res = await fetch(
      "https://portfolio-site-x3hc.onrender.com/api/summary"
    );
    const data = await res.json();
    console.log(data);
    return data
  } catch (error) {
    console.log(error)
  }
}

