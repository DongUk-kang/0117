import React, {useState, useEffect} from 'react';

const App = () => {


    // 1. 데이터 담을공간 설정
    const [data, setData] = useState({})


    // 3. 네트워킹 함
    const getData = async () => {
        return (
            await fetch("https://api.themoviedb.org/3/movie/464052?api_key=8597e491ed6e80f0de12e349eb60ea6e&language=en-US")
                .then(data => data.json())
                .then(res => setData(res))
                // .then(res => console.log(res))
                .catch(err => console.log(err))

        )
    }

    //2. 자동실행 함
    useEffect(() => {
        getData()
    }, {})


    // 4 최종 마무리 
    return (
        <div>
          <h1>{data.original_title}</h1>
            <h2>{data.overview}</h2>
            {data.genres.map(genre => (
                <h3>{genre.name}</h3>
            ))}
        </div>
    );
};

export default App;
