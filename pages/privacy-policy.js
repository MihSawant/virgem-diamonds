import React, { useEffect } from 'react';
import { Breadcrumb_pages, useFetchData } from '../src/comman';
import ThemeChanger from '../src/component/ThemeChanger';
import Header_h1 from 'src/component/Header_h1'
import Footer_h3 from '../src/component/Footer_h3';

export default function Single_shop() {

  /*  ============= Skeletone_loader ============   */

  const [isLoading, setIsLoading] = React.useState(true);
  const breadcrumbItems = [
    { title: 'privacy policy', url: ``, type: false },
  ];

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);


  return (
    <>
      <ThemeChanger />
      <Header_h1 />
      <Breadcrumb_pages breadcrumbItems={breadcrumbItems} />

      <div className='2xl:py-24 lg:py-16 py-12 '>
        <div className='container'>
          <h1 className='text-gray-800 md:mb-8 mb-4 2xl:text-3xl lg:text-2xl sm:text-1xl text-xl leading-tight'>Privacy Policy</h1>
          <p className='mb-3 2xl:text-lg lg:text-[17px] text-md text-gray-400 leading-7 '>&ldquo;Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci.</p>
          <h2 className='text-gray-800 md:my-8 my-4 2xl:text-xl lg:text-[26px] sm:text-[22px] text-[20px] leading-tight'>Who We Are</h2>
          <p className='mb-3 2xl:text-lg lg:text-[17px] text-md text-gray-400 leading-7 '>&ldquo;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.&rdquo;</p>
          <h2 className='text-gray-800 md:my-8 my-4 2xl:text-xl lg:text-[26px] sm:text-[22px] text-[20px] leading-tight'>Comments</h2>
          <p className='mb-3 2xl:text-lg lg:text-[17px] text-md text-gray-400 leading-7 '>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?&rdquo;</p>
          <p className='mb-3 2xl:text-lg lg:text-[17px] text-md text-gray-400 leading-7 '>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>
          <h2 className='text-gray-800 md:my-8 my-4 2xl:text-xl lg:text-[26px] sm:text-[22px] text-[20px] leading-tight'>Information You Provide</h2>
          <p className='mb-3 2xl:text-lg lg:text-[17px] text-md text-gray-400 leading-7 '>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?&rdquo;</p>
          <p className='mb-3 2xl:text-lg lg:text-[17px] text-md text-gray-400 leading-7 '>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>
          <ul className='list-disc pl-6 mt-6'>
            <li className='mb-3 2xl:text-lg lg:text-[17px] text-md text-gray-400 leading-7 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim.</li>
            <li className='mb-3 2xl:text-lg lg:text-[17px] text-md text-gray-400 leading-7 '>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</li>
            <li className='mb-3 2xl:text-lg lg:text-[17px] text-md text-gray-400 leading-7 '>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas.</li>
            <li className='mb-3 2xl:text-lg lg:text-[17px] text-md text-gray-400 leading-7 '>Encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. </li>
            <li className='mb-3 2xl:text-lg lg:text-[17px] text-md text-gray-400 leading-7 '> Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally.</li>
            <li className='mb-3 2xl:text-lg lg:text-[17px] text-md text-gray-400 leading-7 '>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will</li>
            <li className='mb-3 2xl:text-lg lg:text-[17px] text-md text-gray-400 leading-7 '>These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. </li>
          </ul>
          <h2 className='text-gray-800 md:my-8 my-4 2xl:text-xl lg:text-[26px] sm:text-[22px] text-[20px] leading-tight'>Media</h2>
          <p className='mb-3 2xl:text-lg lg:text-[17px] text-md text-gray-400 leading-7 '>&ldquo;But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.&rdquo;</p>
          <h2 className='text-gray-800 md:my-8 my-4 2xl:text-xl lg:text-[26px] sm:text-[22px] text-[20px] leading-tight'>Cookies Policy</h2>
          <p className='mb-3 2xl:text-lg lg:text-[17px] text-md text-gray-400 leading-7 '>&ldquo;At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda</p>
          <p className='mb-3 2xl:text-lg lg:text-[17px] text-md text-gray-400 leading-7 '>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. </p>
          <p className='mb-3 2xl:text-lg lg:text-[17px] text-md text-gray-400 leading-7 '>&ldquo;On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour</p>
          <p className='mb-3 2xl:text-lg lg:text-[17px] text-md text-gray-400 leading-7 '>Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise,</p>
          <h2 className='text-gray-800 md:my-8 my-4 2xl:text-xl lg:text-[26px] sm:text-[22px] text-[20px] leading-tight'>Use of Information</h2>
          <p className='mb-3 2xl:text-lg lg:text-[17px] text-md text-gray-400 leading-7 '>&ldquo;At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda</p>
          <h2 className='text-gray-800 md:my-8 my-4 2xl:text-xl lg:text-[26px] sm:text-[22px] text-[20px] leading-tight'>Data Transfers</h2>
          <p className='mb-3 2xl:text-lg lg:text-[17px] text-md text-gray-400 leading-7 '>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. </p>

        </div>
      </div>

      <Footer_h3 />
    </>
  )
}



