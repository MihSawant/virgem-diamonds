import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { BoxedProduct } from '../../comman'
import Image from 'next/image'
import { Skeleton } from '@nextui-org/react'
import { useCart } from 'react-use-cart'

const FilterGallery_h4 = ({ initialValues }) => {

  const { addItem, items } = useCart();

  let items_array = []
  let cat_tabs_array = []
  if (initialValues[0] != undefined) {
    items_array = initialValues[0].items
    cat_tabs_array = initialValues[0].items
  }
  const [items_data, setItems] = useState(items_array)
  const [active, setActive] = useState('all')

  const AddToCart = (data) => {
    addItem(data);
    const old_class = document.getElementById('mini-cart').className;
    const new_class = old_class === 'color_switch fixed top-0 z-50 transition-all w-full -right-0 h-full' ? 'color_switch fixed top-0 z-50 transition-all w-full -right-full h-full' : 'color_switch fixed top-0 z-50 transition-all w-full -right-0 h-full'
    document.getElementById('mini-cart').className = new_class
  };

  function filterItem(category) {
    setActive(category)
    if (category == 'all') {
      setItems(items_array)
      return
    }
    const filteredData = items_array.filter(value => {
      return value.category == category
    })
    setItems(filteredData)
  }

  useEffect(() => {
    if (initialValues[0] !== undefined) {
      setItems(initialValues[0].items)
    }
  }, [initialValues])

  const [isLoading, setIsLoading] = React.useState(true);
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);
  const get_badge = (badge_type = '') => {
    if (badge_type) {
      if (badge_type === 'In available') {
        return (
          <p className="sm:text-[13px] text-[12px] text-[#136400] uppercase  mb-2 font-montserrat font-[600]">{badge_type}</p>
        )
      } else if (badge_type === 'Sold Out') {
        return (
          <p className="sm:text-[13px] text-[12px] text-[#a50000] uppercase  mb-2 font-montserrat font-[600]">{badge_type}</p>
        )
      } else if (badge_type === 'In Stock') {
        return (
          <p className="sm:text-[13px] text-[12px] text-[#a5009e] uppercase  mb-2 font-montserrat font-[600]">{badge_type}</p>
        )
      } else if (badge_type === 'New Arrivals') {
        return (
          <p className="sm:text-[13px] text-[12px] text-[#cb7200] uppercase  mb-2 font-montserrat font-[600]">{badge_type}</p>
        )
      } else if (badge_type === 'Best Seller') {
        return (
          <p className="sm:text-[13px] text-[12px] text-[#002eb7] uppercase  mb-2 font-montserrat font-[600]">{badge_type}</p>
        )
      } else {
        return (
          <p className="sm:text-[13px] text-[12px] text-gray-600 uppercase  mb-2 font-montserrat font-[600]">{badge_type}</p>
        )
      }
    }
  }
  return (
    <>
      {isLoading ? (
        <React.Fragment>
          <div className='container '>
            <div className='2xl:pt-24 lg:pt-20 pt-14 lg:pb-6 pb-2 lg:mb-8 mb-6 overflow-hidden flex items-center md:flex-nowrap flex-wrap sm:gap-0 gap-3 md:justify-between justify-center border-b border-gray-400/20'>
              <h2 className='text-gray-800 lg:text-3xl sm:text-1xl text-xl sm:w-auto w-full capitalize leading-tight text-center font-catchye'>
                shop by category
              </h2>
              <ul className='nav nav-pills text-center'>
                <li className="nav-item font-montserrat font-[500] leading-tight inline-block align-middle  after:content-['|'] after:sm:mx-4 after:mx-2 after:inline-block after:align-middle last:after:hidden 2xl:text-lg cursor-pointer py-1 lg:py-2 md:text-md text-[15px] hover:text-violet-900 text-center text-gray-800">
                  <span
                    className={
                      active === 'all'
                        ? 'nav-link font-[700] text-violet-900'
                        : 'nav-link active'
                    }
                    onClick={() => filterItem('all')}
                  >
                    All
                  </span>
                </li>
                <li className="nav-item font-montserrat font-[500] leading-tight inline-block align-middle  after:content-['|'] after:sm:mx-4 after:mx-2 after:inline-block after:align-middle last:after:hidden 2xl:text-lg cursor-pointer py-1 lg:py-2 md:text-md text-[15px] hover:text-violet-900 text-center text-gray-800">
                  <span
                    className={
                      active === 'Rings'
                        ? 'nav-link font-[700] text-violet-900'
                        : 'nav-link active'
                    }
                    onClick={() => filterItem('Rings')}
                  >
                    Rings
                  </span>
                </li>
                <li className="nav-item font-montserrat font-[500] leading-tight inline-block align-middle  after:content-['|'] after:sm:mx-4 after:mx-2 after:inline-block after:align-middle last:after:hidden 2xl:text-lg cursor-pointer py-1 lg:py-2 md:text-md text-[15px] hover:text-violet-900 text-center text-gray-800">
                  <span
                    className={
                      active === 'Earrings'
                        ? 'nav-link font-[700] text-violet-900'
                        : 'nav-link active'
                    }
                    onClick={() => filterItem('Earrings')}
                  >
                    Earrings
                  </span>
                </li>
                <li className="nav-item font-montserrat font-[500] leading-tight inline-block align-middle  after:content-['|'] after:sm:mx-4 after:mx-2 after:inline-block after:align-middle last:after:hidden 2xl:text-lg cursor-pointer py-1 lg:py-2 md:text-md text-[15px] hover:text-violet-900 text-center text-gray-800">
                  <span
                    className={
                      active === 'Bracelets'
                        ? 'nav-link font-[700] text-violet-900'
                        : 'nav-link active'
                    }
                    onClick={() => filterItem('Bracelets')}
                  >
                    Bracelets
                  </span>
                </li>
                <li className="nav-item font-montserrat font-[500] leading-tight inline-block align-middle  after:content-['|'] after:sm:mx-4 after:mx-2 after:inline-block after:align-middle last:after:hidden 2xl:text-lg cursor-pointer py-1 lg:py-2 md:text-md text-[15px] hover:text-violet-900 text-center text-gray-800">
                  <span
                    className={
                      active === 'Necklaces'
                        ? 'nav-link font-[700] text-violet-900'
                        : 'nav-link active'
                    }
                    onClick={() => filterItem('Necklaces')}
                  >
                    Necklaces
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className='container mt-4'>
            <div className='row'>
              <div className='flex items-stretch lg:flex-nowrap flex-wrap gap-6'>

                <div className='relative lg:w-1/3 w-full'>
                  <Skeleton className='w-full rounded 1xl:h-[650px] lg:h-[550px] h-[500px]' />
                </div>

                <div className='lg:w-2/3 w-full filter-container card grid sm:grid-cols-2 grid-cols-1 md:gap-5 gap-4'>
                  <div className='bg-white border h-auto border-gray-400/20 p-3.5 group flex items-stretch gap-4'>
                    <div className='relative sm:w-2/5 w-full'>
                      <Skeleton className='w-full h-full rounded' />
                    </div>
                    <div className="sm:w-3/5 w-full self-center">
                      <Skeleton className='w-24 h-5 rounded mb-2' />
                      <Skeleton className='w-full lg:h-9 h-5 rounded mb-2' />
                      <Skeleton className='w-24 h-6 rounded' />
                      <div className='flex items-center flex-wrap 2xl:gap-4 gap-2 1xl:mt-3 mt-2'>
                        <Skeleton className='w-24 h-5 rounded' />
                        <Skeleton className='w-24 h-5 rounded' />
                      </div>
                    </div>
                  </div>
                  <div className='bg-white border h-auto border-gray-400/20 p-3.5 group flex items-stretch gap-4'>
                    <div className='relative sm:w-2/5 w-full'>
                      <Skeleton className='w-full h-full rounded' />
                    </div>
                    <div className="sm:w-3/5 w-full self-center">
                      <Skeleton className='w-24 h-5 rounded mb-2' />
                      <Skeleton className='w-full lg:h-9 h-5 rounded mb-2' />
                      <Skeleton className='w-24 h-6 rounded' />
                      <div className='flex items-center flex-wrap 2xl:gap-4 gap-2 1xl:mt-3 mt-2'>
                        <Skeleton className='w-24 h-5 rounded' />
                        <Skeleton className='w-24 h-5 rounded' />
                      </div>
                    </div>
                  </div>
                  <div className='bg-white border h-auto border-gray-400/20 p-3.5 group flex items-stretch gap-4'>
                    <div className='relative sm:w-2/5 w-full'>
                      <Skeleton className='w-full h-full rounded' />
                    </div>
                    <div className="sm:w-3/5 w-full self-center">
                      <Skeleton className='w-24 h-5 rounded mb-2' />
                      <Skeleton className='w-full lg:h-9 h-5 rounded mb-2' />
                      <Skeleton className='w-24 h-6 rounded' />
                      <div className='flex items-center flex-wrap 2xl:gap-4 gap-2 1xl:mt-3 mt-2'>
                        <Skeleton className='w-24 h-5 rounded' />
                        <Skeleton className='w-24 h-5 rounded' />
                      </div>
                    </div>
                  </div>
                  <div className='bg-white border h-auto border-gray-400/20 p-3.5 group flex items-stretch gap-4'>
                    <div className='relative sm:w-2/5 w-full'>
                      <Skeleton className='w-full h-full rounded' />
                    </div>
                    <div className="sm:w-3/5 w-full self-center">
                      <Skeleton className='w-24 h-5 rounded mb-2' />
                      <Skeleton className='w-full lg:h-9 h-5 rounded mb-2' />
                      <Skeleton className='w-24 h-6 rounded' />
                      <div className='flex items-center flex-wrap 2xl:gap-4 gap-2 1xl:mt-3 mt-2'>
                        <Skeleton className='w-24 h-5 rounded' />
                        <Skeleton className='w-24 h-5 rounded' />
                      </div>
                    </div>
                  </div>
                  <div className='bg-white border h-auto border-gray-400/20 p-3.5 group flex items-stretch gap-4'>
                    <div className='relative sm:w-2/5 w-full'>
                      <Skeleton className='w-full h-full rounded' />
                    </div>
                    <div className="sm:w-3/5 w-full self-center">
                      <Skeleton className='w-24 h-5 rounded mb-2' />
                      <Skeleton className='w-full lg:h-9 h-5 rounded mb-2' />
                      <Skeleton className='w-24 h-6 rounded' />
                      <div className='flex items-center flex-wrap 2xl:gap-4 gap-2 1xl:mt-3 mt-2'>
                        <Skeleton className='w-24 h-5 rounded' />
                        <Skeleton className='w-24 h-5 rounded' />
                      </div>
                    </div>
                  </div>
                  <div className='bg-white border h-auto border-gray-400/20 p-3.5 group flex items-stretch gap-4'>
                    <div className='relative sm:w-2/5 w-full'>
                      <Skeleton className='w-full h-full rounded' />
                    </div>
                    <div className="sm:w-3/5 w-full self-center">
                      <Skeleton className='w-24 h-5 rounded mb-2' />
                      <Skeleton className='w-full lg:h-9 h-5 rounded mb-2' />
                      <Skeleton className='w-24 h-6 rounded' />
                      <div className='flex items-center flex-wrap 2xl:gap-4 gap-2 1xl:mt-3 mt-2'>
                        <Skeleton className='w-24 h-5 rounded' />
                        <Skeleton className='w-24 h-5 rounded' />
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div className='container '>
            <div className='2xl:pt-24 lg:pt-20 pt-14 lg:pb-6 pb-2 lg:mb-8 mb-6 overflow-hidden flex items-center md:flex-nowrap flex-wrap sm:gap-0 gap-3 md:justify-between justify-center border-b border-gray-400/20'>
              <h2 className='text-gray-800 lg:text-3xl sm:text-1xl text-xl sm:w-auto w-full capitalize leading-tight text-center font-catchye'>
                shop by category
              </h2>
              <ul className='nav nav-pills text-center'>
                <li className="nav-item font-montserrat font-[500] leading-tight inline-block align-middle  after:content-['|'] after:sm:mx-4 after:mx-2 after:inline-block after:align-middle last:after:hidden 2xl:text-lg cursor-pointer py-1 lg:py-2 md:text-md text-[15px] hover:text-violet-900 text-center text-gray-800">
                  <span
                    className={
                      active === 'all'
                        ? 'nav-link font-[700] text-violet-900'
                        : 'nav-link active'
                    }
                    onClick={() => filterItem('all')}
                  >
                    All
                  </span>
                </li>
                <li className="nav-item font-montserrat font-[500] leading-tight inline-block align-middle  after:content-['|'] after:sm:mx-4 after:mx-2 after:inline-block after:align-middle last:after:hidden 2xl:text-lg cursor-pointer py-1 lg:py-2 md:text-md text-[15px] hover:text-violet-900 text-center text-gray-800">
                  <span
                    className={
                      active === 'Rings'
                        ? 'nav-link font-[700] text-violet-900'
                        : 'nav-link active'
                    }
                    onClick={() => filterItem('Rings')}
                  >
                    Rings
                  </span>
                </li>
                <li className="nav-item font-montserrat font-[500] leading-tight inline-block align-middle  after:content-['|'] after:sm:mx-4 after:mx-2 after:inline-block after:align-middle last:after:hidden 2xl:text-lg cursor-pointer py-1 lg:py-2 md:text-md text-[15px] hover:text-violet-900 text-center text-gray-800">
                  <span
                    className={
                      active === 'Earrings'
                        ? 'nav-link font-[700] text-violet-900'
                        : 'nav-link active'
                    }
                    onClick={() => filterItem('Earrings')}
                  >
                    Earrings
                  </span>
                </li>
                <li className="nav-item font-montserrat font-[500] leading-tight inline-block align-middle  after:content-['|'] after:sm:mx-4 after:mx-2 after:inline-block after:align-middle last:after:hidden 2xl:text-lg cursor-pointer py-1 lg:py-2 md:text-md text-[15px] hover:text-violet-900 text-center text-gray-800">
                  <span
                    className={
                      active === 'Bracelets'
                        ? 'nav-link font-[700] text-violet-900'
                        : 'nav-link active'
                    }
                    onClick={() => filterItem('Bracelets')}
                  >
                    Bracelets
                  </span>
                </li>
                <li className="nav-item font-montserrat font-[500] leading-tight inline-block align-middle  after:content-['|'] after:sm:mx-4 after:mx-2 after:inline-block after:align-middle last:after:hidden 2xl:text-lg cursor-pointer py-1 lg:py-2 md:text-md text-[15px] hover:text-violet-900 text-center text-gray-800">
                  <span
                    className={
                      active === 'Necklaces'
                        ? 'nav-link font-[700] text-violet-900'
                        : 'nav-link active'
                    }
                    onClick={() => filterItem('Necklaces')}
                  >
                    Necklaces
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className='container mt-4'>
            <div className='row'>
              <div className='flex items-stretch lg:flex-nowrap flex-wrap gap-6'>

                <div className='relative lg:w-1/3 w-full'>
                  <Image src='https://webby-production.s3.amazonaws.com/Starry-Heavens/home-4/bride-gold-jewellery.jpeg' fill={true} alt='Categoty_img' title='Categoty_img' className='object-cover lg:!absolute !relative' />
                </div>


                <div className='lg:w-2/3 w-full filter-container card grid sm:grid-cols-2 grid-cols-1 md:gap-5 gap-4'>
                  {items_data.length > 0 &&
                    items_data.map((p_data, index) => {
                      let badge = null;
                      if (p_data.sale_badge) {
                        badge = (
                          <span className='bg-white px-2 py-0.5 text-violet-900 font-montserrat font-[600] absolute top-2 left-2 text-[12px]'>{p_data.sale_badge}</span>
                        )
                      }

                      const productInCart = items.some((item) => item.id === p_data.id);

                      return (
                        <div className='bg-white border h-auto border-gray-400/20 p-3.5 group flex items-stretch gap-4' key={index}>
                          <div className='relative sm:w-2/5 w-full'>
                            {badge}
                            <Link href={p_data.pro_link}>
                              <Image src={p_data.img} alt={p_data.alt} title={p_data.alt} width={200} height={200} className='w-full h-full object-cover outline outline-2 outline-offset-4 outline-white group-hover:outline-violet-900 transition-all' />
                            </Link>
                          </div>
                          <div className="sm:w-3/5 w-full self-center">
                            {get_badge(p_data.stock_badge)}
                            <Link href={p_data.pro_link} className='2xl:text-[17px] sm:text-[15px] text-sm leading-snug text-black group-hover:text-violet-900 font-[600] font-montserrat capitalize mb-2 block '>{p_data.title}</Link>
                            <p className="2xl:text-lg sm:text-md text-[15px] text-black uppercase font-montserrat font-[500]">${p_data.price}</p>
                            <div className='flex items-center flex-wrap 2xl:gap-4 gap-2 1xl:mt-3 mt-2'>
                              <button className="group/item 1xl:text-sm text-[12px] text-black  hover:text-violet-900 font-montserrat font-[500] flex items-center group gap-1 2xl:gap-2.5 ">
                                <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg" className='transition-all w-4 h-4'>
                                  <path d="M9.28202 3.53578C6.23077 -0.85717 1 0.908546 1 5.3899C1 9.87128 9.71798 16 9.71798 16C9.71798 16 18 9.62528 18 5.3899C18 1.15449 13.2051 -0.857161 10.1538 3.53578L9.71798 3.88666L9.28202 3.53578Z"
                                    stroke="black" strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' className='transition-all group-hover/item:stroke-violet-900' />
                                </svg>
                                <span className='xl:block hidden'>{p_data.wishlist_label}</span>
                              </button>

                              {
                                productInCart ?
                                  <span onClick={() => AddToCart(p_data)} className="cursor-pointer group/item 1xl:text-sm text-[12px] text-violet-900 font-montserrat font-[500] flex items-center gap-1 2xl:gap-2.5">
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className="md:w-[22px] w-[18px] stroke-[1.5] stroke-gray-800 stroke-violet-900 fill-violet-900 " xmlns="http://www.w3.org/2000/svg">
                                      <path d="M11.0273 5.49757C9.02734 5.49752 5.52734 4.99755 4.52922 7.49756C3.59119 9.84705 3.19588 14.1642 3.02922 15.9975C2.86255 17.3309 3.32922 19.9975 6.52922 19.9975H11.0273M11 5.49757C13 5.49752 16.5 4.99755 17.4981 7.49756C18.4362 9.84705 18.8315 14.1642 18.9981 15.9975C19.1648 17.3309 18.6981 19.9975 15.4981 19.9975H11" />
                                      <path d="M11 1.79999C11.8477 1.79999 14 1.79999 14 5.29999" />
                                      <path d="M11 1.79999C10.1523 1.79999 8 1.79999 8 5.29999" />
                                    </svg>
                                    <span className='xl:block hidden'> Added to cart</span>
                                  </span>
                                  :
                                  <span onClick={() => AddToCart(p_data)} className="cursor-pointer group/item 1xl:text-sm text-[12px] text-black hover:text-violet-900 font-montserrat font-[500] flex items-center gap-1 2xl:gap-2.5">
                                    <svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg" className='transition-all w-4 h-4 group-hover/item:fill-violet-900'>
                                      <path fillRule='evenodd' clipRule='evenodd' d="M8.5001 1.32558C7.98033 1.32558 7.48185 1.53507 7.11432 1.90796C6.74679 2.28085 6.54031 2.7866 6.54031 3.31395V3.54372C7.02547 3.53488 7.55766 3.53488 8.14298 3.53488H8.85809C9.44167 3.53488 9.97473 3.53488 10.4608 3.54372V3.31395C10.4608 3.05276 10.41 2.79413 10.3115 2.55283C10.2129 2.31153 10.0685 2.0923 9.88644 1.90765C9.70436 1.723 9.48822 1.57656 9.25034 1.47668C9.01247 1.37681 8.75753 1.32547 8.5001 1.32558ZM11.7664 3.60381V3.31395C11.7664 2.43504 11.4223 1.59212 10.8097 0.970635C10.1972 0.349148 9.36638 0 8.5001 0C7.63382 0 6.80302 0.349148 6.19047 0.970635C5.57791 1.59212 5.23378 2.43504 5.23378 3.31395V3.60381C5.10923 3.61442 4.9899 3.62679 4.87318 3.64181C3.99346 3.75228 3.26877 3.98381 2.65209 4.50256C2.03628 5.0213 1.67829 5.70177 1.40915 6.55898C1.14785 7.38967 0.950996 8.45633 0.703627 9.7987L0.685336 9.89591C0.335187 11.7897 0.0599455 13.2823 0.0085555 14.4586C-0.0437055 15.6648 0.133982 16.6634 0.804665 17.4827C1.47535 18.3027 2.40995 18.6633 3.58756 18.8339C4.73731 19 6.23284 19 8.13253 19H8.86854C10.7674 19 12.2638 19 13.4126 18.8339C14.5902 18.6633 15.5257 18.3027 16.1964 17.4827C16.8671 16.6634 17.043 15.6648 16.9916 14.4586C16.9411 13.2823 16.665 11.7897 16.3149 9.89591L16.2974 9.7987C16.0492 8.45633 15.8515 7.38879 15.5919 6.55898C15.3219 5.70177 14.9648 5.0213 14.3481 4.50256C13.7323 3.98381 13.0067 3.7514 12.127 3.64181C12.0071 3.62689 11.8868 3.61422 11.7664 3.60381ZM5.03345 4.95767C4.28873 5.05047 3.83842 5.22633 3.48653 5.52326C3.13551 5.81842 2.88204 6.23465 2.65383 6.96107C2.42127 7.7034 2.23749 8.69139 1.97967 10.0868C1.61732 12.046 1.36037 13.4449 1.31421 14.5169C1.26892 15.5685 1.43615 16.1783 1.80982 16.6369C2.18436 17.0938 2.74442 17.3722 3.77222 17.5207C4.81744 17.6727 6.22152 17.6744 8.18566 17.6744H8.81453C10.7787 17.6744 12.1819 17.6727 13.228 17.5215C14.2558 17.3722 14.8158 17.0938 15.1904 16.6369C15.5649 16.1792 15.7313 15.5694 15.6869 14.516C15.6398 13.4458 15.3829 12.046 15.0205 10.0868C14.7627 8.69051 14.5798 7.70428 14.3464 6.96107C14.1182 6.23465 13.8656 5.81842 13.5137 5.52237C13.1618 5.22633 12.7123 5.05047 11.9667 4.95679C11.2037 4.86135 10.2134 4.86047 8.81366 4.86047H8.18653C6.78681 4.86047 5.79646 4.86135 5.03345 4.95767Z" fill="black" className='transition-all  group-hover/item:fill-violet-900' />
                                    </svg>
                                    <span className='xl:block hidden'> Add to cart</span>
                                  </span>
                              }
                            </div>
                          </div>
                        </div>
                      )
                    })}
                </div>


              </div>
            </div>
          </div>
        </React.Fragment>
      )}

    </>
  )
}

export default FilterGallery_h4
