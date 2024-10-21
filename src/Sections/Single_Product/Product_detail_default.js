import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import { Checkbox, CheckboxGroup, Skeleton, cn } from "@nextui-org/react";
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons'
const Product_Detail = ({ initialValues }) => {

    /*  ============= Skeletone_loader ============   */
    const [isLoading, setIsLoading] = useState(true);
    const [product_item, setproduct_item] = useState(1);

    const CustomColorbox = (props) => {
        const { children, ...otherProps } = props;

        return (
            <Checkbox
                {...otherProps}
                classNames={{
                    base: cn(
                        "inline-flex m-0 items-center q_radio break-words  !w-auto !p-0",
                        "w-full max-w-full cursor-pointer rounded-none ",
                        " data-[selected=true]:outline-violet-900  data-[selected=true]:outline-2 outline outline-1 outline-gray-600 outline-offset-2 rounded-full  "
                    ),
                    label: "group-data-[selected=true]:text-white group-data-[hover=true]:text-white text-gray-900 2xl:text-[16px] 2xl:group-[.small]:text-[15px] group-[.small]:text-[13px] sm:text-[15px]  !transition-none text-sm w-full flex items-center",
                    wrapper: "hidden"
                }}>
                {children}
            </Checkbox>
        );
    }
    const handleIncrement = () => {
        setproduct_item(product_item + 1);
    };

    const handleDecrement = () => {
        if (product_item > 1) {
            setproduct_item(product_item - 1);
        }
    };

    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1000);
    }, []);

    return (
        <>
            {isLoading ? (
                <div className="relative lg:pl-8">
                    <Skeleton className='w-full lg:h-16 h-12 rounded' />
                    <Skeleton className='w-28 h-6 md:my-4 my-2 rounded' />
                    <Skeleton className='w-full h-20 my-4 rounded' />
                    <Skeleton className='w-full h-20 my-4 rounded' />
                    <Skeleton className='w-36 h-8 rounded' />
                    <div className='flex items-stretch gap-3 sm:flex-nowrap flex-wrap md:my-6 my-2'>
                        <Skeleton className='lg:w-48 sm:w-32 w-full lg:h-14 h-12 rounded' />
                        <Skeleton className='lg:w-48 sm:w-32 w-full lg:h-14 h-12 rounded' />
                    </div>

                    <div className='mt-8'>
                        <Skeleton className='mb-4 w-32 h-7 my-4 rounded' />
                        <Skeleton className='mb-3 lg:w-64 w-full h-7 my-4 rounded' />
                        <Skeleton className='mb-3 lg:w-64 w-full h-7 my-4 rounded' />
                        <Skeleton className='mb-3 lg:w-64 w-full h-7 my-4 rounded' />
                        <Skeleton className='mb-3 lg:w-64 w-full h-7 my-4 rounded' />
                    </div>
                </div >
            ) : (
                <>
                    {initialValues && initialValues.map((data, index) => {
                        return (
                            <div className="relative lg:pl-8" key={index}>
                                <h1 className='text-gray-800 2xl:text-4xl lg:text-3xl sm:text-1xl text-xl uppercase leading-tight'>{data.name}</h1>
                                <div className="flex item-center  md:my-4 my-2 ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M11.5634 16.636L15.5612 19.0539C16.2933 19.497 17.1892 18.842 16.9965 18.0135L15.9369 13.4667L19.4722 10.4033C20.1177 9.84458 19.7709 8.78493 18.9232 8.7175L14.2703 8.32254L12.4496 4.02613C12.1221 3.24585 11.0047 3.24585 10.6771 4.02613L8.85647 8.3129L4.20364 8.70787C3.35591 8.7753 3.00912 9.83495 3.65454 10.3937L7.18992 13.457L6.13027 18.0039C5.93761 18.8323 6.8335 19.4874 7.56562 19.0443L11.5634 16.636Z" fill="#F9B856"></path></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M11.5634 16.636L15.5612 19.0539C16.2933 19.497 17.1892 18.842 16.9965 18.0135L15.9369 13.4667L19.4722 10.4033C20.1177 9.84458 19.7709 8.78493 18.9232 8.7175L14.2703 8.32254L12.4496 4.02613C12.1221 3.24585 11.0047 3.24585 10.6771 4.02613L8.85647 8.3129L4.20364 8.70787C3.35591 8.7753 3.00912 9.83495 3.65454 10.3937L7.18992 13.457L6.13027 18.0039C5.93761 18.8323 6.8335 19.4874 7.56562 19.0443L11.5634 16.636Z" fill="#F9B856"></path></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M11.5634 16.636L15.5612 19.0539C16.2933 19.497 17.1892 18.842 16.9965 18.0135L15.9369 13.4667L19.4722 10.4033C20.1177 9.84458 19.7709 8.78493 18.9232 8.7175L14.2703 8.32254L12.4496 4.02613C12.1221 3.24585 11.0047 3.24585 10.6771 4.02613L8.85647 8.3129L4.20364 8.70787C3.35591 8.7753 3.00912 9.83495 3.65454 10.3937L7.18992 13.457L6.13027 18.0039C5.93761 18.8323 6.8335 19.4874 7.56562 19.0443L11.5634 16.636Z" fill="#F9B856"></path></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M11.5634 16.636L15.5612 19.0539C16.2933 19.497 17.1892 18.842 16.9965 18.0135L15.9369 13.4667L19.4722 10.4033C20.1177 9.84458 19.7709 8.78493 18.9232 8.7175L14.2703 8.32254L12.4496 4.02613C12.1221 3.24585 11.0047 3.24585 10.6771 4.02613L8.85647 8.3129L4.20364 8.70787C3.35591 8.7753 3.00912 9.83495 3.65454 10.3937L7.18992 13.457L6.13027 18.0039C5.93761 18.8323 6.8335 19.4874 7.56562 19.0443L11.5634 16.636Z" fill="#F9B856"></path>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M12.0327 16.052L12.2909 16.2081L16.2887 18.6261L16.2888 18.6262C16.6406 18.8391 17.0712 18.5265 16.9783 18.1268L15.9187 13.5801L15.8502 13.2863L16.0782 13.0888L19.6136 10.0254L19.6137 10.0253C19.9259 9.75505 19.7549 9.24795 19.3523 9.21592L19.3496 9.21571L19.3496 9.21571L14.6968 8.82075L14.3963 8.79524L14.2787 8.51763L12.458 4.22122L12.4574 4.21965C12.3014 3.84801 11.7629 3.84801 11.6069 4.21965L11.6061 4.2216L11.6061 4.2216L9.78543 8.50837L9.66767 8.78563L9.36751 8.81111L4.71468 9.20607L4.71203 9.2063L4.71203 9.20629C4.3094 9.23832 4.13839 9.74542 4.45054 10.0156L4.45072 10.0158L7.9861 13.0792L8.2141 13.2767L8.14563 13.5705L7.08603 18.1172L12.0327 16.052ZM12.0327 16.052L11.7741 16.2077M12.0327 16.052L11.7741 16.2077M11.7741 16.2077L7.77636 18.616L7.77547 18.6165M11.7741 16.2077L7.77547 18.6165M7.77547 18.6165C7.42379 18.8294 6.99324 18.517 7.08597 18.1174L7.77547 18.6165Z" stroke="#F9B856"> </path>
                                    </svg>
                                </div>
                                <p className='mb-4 2xl:text-lg lg:text-[17px] text-md text-gray-800 leading-7'>{data.short_des}</p>
                                <p className='mb-4 2xl:text-lg lg:text-[17px] text-md text-gray-800 leading-7'>{data.short_des_2}</p>
                                <h3 className='lg:text-3xl sm:text-1xl text-xl uppercase text-gray-800'>${data.regular_price}</h3>
                                <div className='flex items-stretch gap-3 sm:flex-nowrap flex-wrap md:my-6 my-2'>
                                    <div className="flex items-center border border-violet-900 sm:grow-0 grow justify-between">
                                        <button onClick={handleDecrement} className="quantity-button minus w-12 text-center text-gray-800 text-[22px] font-semibold lg:p-2.5 p-1.5 cursor-pointer">-</button>
                                        <input type="text" className="input-text bg-white input-qty text w-20 text-center text-gray-800 lg:text-[22px] text-lg font-semibold lg:p-2.5 p-1.5 focus:outline-none" name="cart" value={product_item} onChange={(e) => setproduct_item(parseInt(e.target.value) || 0)} title="Qty" size="4" placeholder="" autoComplete="off" />
                                        <button onClick={handleIncrement} className="quantity-button plus w-12 text-center text-gray-800 text-[22px] font-semibold lg:p-2.5 p-1.5  cursor-pointer">+</button>
                                    </div>

                                    <Link className='all-btn px-12 py-3 flex items-center  sm:grow-0 grow justify-center leading-tight lg:text-[20px] text-lg capitalize' href='/cart'>Add to cart</Link>
                                </div>
                                <div className='mt-8'>
                                    <p className='mb-4 2xl:text-lg lg:text-[17px] text-md text-gray-800 font-semibold capitalize'>product info</p>
                                    <ul className='p-0 m-0'>
                                        <li className='list-none flex  mb-3'>
                                            <label className='2xl:text-lg lg:text-[17px] text-md text-gray-900 mr-2.5 font-[500] min-w-[55px] inline-block'>Metal:</label>
                                            <CheckboxGroup
                                                defaultValue={["Round"]}
                                                classNames={{
                                                    base: "w-full shape-filter",
                                                    wrapper: "flex flex-row gap-4 items-start content-start	"
                                                }} >
                                                <CustomColorbox value="gold">
                                                <span className='w-5 h-5 rounded-full bg-gradient-to-r from-[#EFA71B] via-[#F2F2F2] to-[#EFA71B] '></span>
                                                </CustomColorbox>
                                                <CustomColorbox value="silver">
                                                <span className='w-5 h-5 rounded-full bg-gradient-to-r from-[#727472] via-[#D6D6D6] to-[#727472] '></span>
                                                </CustomColorbox>
                                                <CustomColorbox value="rose gold">
                                                <span className='w-5 h-5 rounded-full bg-gradient-to-r from-[#E3C2C2] via-[#F2F2F2] to-[#E3C2C2] '></span>
                                                </CustomColorbox>
                                            </CheckboxGroup>
                                        </li>
                                        <li className='mb-3'>
                                            <label className='2xl:text-lg lg:text-[17px] text-md text-gray-900 mr-2.5 font-[500] min-w-[55px] inline-block'>Carat:</label>
                                            <span className=' text-md text-gray-400 '>0.90-0.99</span>
                                        </li>
                                        <li className='mb-3'>
                                            <label className='2xl:text-lg lg:text-[17px] text-md text-gray-900 mr-2.5 font-[500] min-w-[55px] inline-block'>Clarity:</label>
                                            <span className=' text-md text-gray-400 '>VVS2</span>
                                        </li>
                                        <li className='mb-3'>
                                            <label className='2xl:text-lg lg:text-[17px] text-md text-gray-900 mr-2.5 font-[500] min-w-[55px] inline-block align-middle'>Share: </label>
                                            <div className='inline-flex items-center gap-3  align-middle'>
                                                <Link href='#'  className='block leading-4'><FontAwesomeIcon icon={faFacebookF} className="fa-brands fa-facebook-f text-gray-400 hover:text-violet-900 w-6 text-lg lg:text-[19px] h-6 inline-block" ></FontAwesomeIcon></Link>
                                                <Link href='#'  className='block leading-4'><FontAwesomeIcon icon={faInstagram} className="fa-brands fa-instagram text-gray-400 hover:text-violet-900 w-6 text-lg lg:text-[19px] h-6 inline-block" ></FontAwesomeIcon></Link>
                                                <Link href='#'  className='block leading-4'><FontAwesomeIcon icon={faYoutube} className="fa-brands fa-youtube text-gray-400 hover:text-violet-900 w-6 text-lg lg:text-[19px] h-6 inline-block" ></FontAwesomeIcon></Link>
                                                <Link href='#'  className='block leading-4'><FontAwesomeIcon icon={faWhatsapp} className="fa-brands fa-youtube text-gray-400 hover:text-violet-900 w-6 text-lg lg:text-[19px] h-6 inline-block" ></FontAwesomeIcon></Link>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div >
                        )
                    })}
                </>
            )}


        </>

    )
}

export default Product_Detail;