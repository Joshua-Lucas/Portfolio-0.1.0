import React from 'react';
import ProjectContainer from './projects/ProjectContainer';




const Works = () => 
{
    return (
        <div className="flex flex-col items-center py-10 lg:py-32 px-5" >
            <div id='works'>
                <h1 className="font-accent text-center text-2xl font-semibold md:text-3xl lg:text-4xl">My Works</h1>
            </div>
            <div className="flex flex-wrap w-full  md:px-0 lg:w-3/4 xl:w-3/5 justify-center my-12 ">
               <ProjectContainer />
            </div>
            <a className=" flex justify-around items-center border-2 rounded-full p-2 hover:text-primary md:border-2 border-secondary md:rounded-full md:px-2 md:pr-3 hover:bg-secondary md:hover:text-primary" href="https://github.com/Joshua-Lucas">

                    <svg className="w-12 h-12 text-center fill-current hover:text-primary" version="1.1" fill="#49494b"  stroke="#49494b" stroke-width="1">
                        <path transform="translate(5,2.5)" className="m-auto" d="M14.4252739,36.5168887 C14.4252739,36.0671729 14.4094072,34.8772272 14.4003405,33.2968305 C9.2651779,34.440294 8.18170506,30.7588994 8.18170506,30.7588994 C7.34190028,28.5719093 6.13149339,27.9897191 6.13149339,27.9897191 C4.45528384,26.8148801 6.25842744,26.8392833 6.25842744,26.8392833 C8.111438,26.9729198 9.08611021,28.7903759 9.08611021,28.7903759 C10.7328529,31.6827342 13.4064015,30.8483777 14.4592741,30.3638002 C14.6270084,29.1401549 15.1041445,28.3057984 15.6311475,27.8328415 C11.5318575,27.3552363 7.22176626,25.7306815 7.22176626,18.4771257 C7.22176626,16.4109894 7.94143703,14.7213595 9.12237709,13.3977773 C8.93310934,12.9190101 8.29843906,10.9946447 9.30371145,8.38815229 C9.30371145,8.38815229 10.8541203,7.8791716 14.3799404,10.3287864 C15.8521487,9.90928408 17.4320244,9.69778982 19.0028333,9.69081748 C20.5702423,9.69778982 22.1489846,9.90928408 23.624593,10.3287864 C27.1481464,7.8791716 28.6962885,8.38815229 28.6962885,8.38815229 C29.7038276,10.9934827 29.0702907,12.917848 28.8798896,13.3977773 C30.0630963,14.7213595 30.7771004,16.4109894 30.7771004,18.4771257 C30.7771004,25.7492744 26.4602091,27.349426 22.3473191,27.8177347 C23.0114562,28.4022491 23.6007929,29.5573331 23.6007929,31.3236588 C23.6007929,33.8546176 23.5769927,35.8963506 23.5769927,36.5168887 C23.5769927,37.0235453 23.9101946,37.6115458 24.8474666,37.4267788 C32.176775,34.9190612 37.4615385,27.8281932 37.4615385,19.4683597 C37.4615385,9.01333862 29.1949581,0.538461538 18.9994333,0.538461538 C8.80504195,0.538461538 0.538461538,9.01333862 0.538461538,19.4683597 C0.539594878,27.8305174 5.82889166,34.9260335 13.1650001,37.4291029 C14.0875387,37.6022493 14.4252739,37.017735 14.4252739,36.5168887 Z"/>
                    </svg>
                <p className="pr-1"> See More Porjects</p>
            </a>
        
        </div>
    );

}

export default Works;