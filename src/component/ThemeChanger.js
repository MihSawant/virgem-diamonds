import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { RadioGroup, Radio } from '@nextui-org/react'
import { faSwatchbook} from '@fortawesome/free-solid-svg-icons'
import {useRouter} from 'next/router';

const themes = [
  { name: 'violet' },
  { name: 'caramel' },
  { name: 'pink'},
  { name: 'purple'},
]

const sticky = [
  { name: 'static' },
  { name: 'sticky' },
]

const layout = [
  { name: 'ltr' },
  { name: 'rtl' },
]

  const setLayout = (value) => {
    document.body.removeAttribute('dir');
    document.body.setAttribute("dir", value);
  }


  const setNavsticky = (value) => {
    if(value == 'static'){
      document.body.removeAttribute('scroll-sticky');
    }
    document.body.removeAttribute('id');
    document.body.setAttribute("id", value);
  }


const ThemeChanger = () => {
  const location = useRouter();
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()


  const setTheme_fun = (value) => {
    document.body.removeAttribute('theme-type');
    document.body.setAttribute("theme-type", value);
  }

  const [selected, setSelected] = useState("static");

   //Toggle color switch:
  const toggleSwatch = () => {
    const old_class = document.getElementById('color-swatch').className;
    const new_class = old_class === 'color_switch w-full h-full fixed top-0 z-50 transition-all pl-4 right-0' ? 'color_switch w-full h-full fixed top-0 z-50 transition-all pl-4 -right-full' : 'color_switch w-full h-full fixed top-0 z-50 transition-all pl-4 right-0'
    document.getElementById('color-swatch').className = new_class
  }

  // When mounted on client, now we can show the UI

useEffect(() => {
    setMounted(true)
    document.body.setAttribute("dir", "ltr");
    window.onscroll = function() {myFunction()};
    function myFunction() {
      var header = document.getElementById("header");
      var body_sticky = document.getElementById('sticky');
      var sticky = header.offsetTop;
      var diff_sticky = Math.abs(window.pageYOffset) - Math.abs(sticky)
      if(body_sticky){
        if (Math.abs(window.pageYOffset) > Math.abs(sticky) && diff_sticky > 5) {
          document.body.setAttribute("scroll-sticky", "yes");
        } else {
          document.body.removeAttribute('scroll-sticky');
        }
      }else{
        document.body.removeAttribute("scroll-sticky");
      }
    }
  },[location.pathname]);

  if (!mounted) return null

  return (
    <div className="fixed sm:top-1/2 sm:bottom-auto bottom-2 right-0 z-50  p-0 theme-changer ">

    <div className="bg-violet-900  border border-gray-400/20 border-r-0 rounded-l-full absolute right-0 sm:bottom-auto bottom-0 sm:-top-[60px] z-10">
      <div className="sm:w-12 sm:h-10 w-8 h-8 flex items-center ltr:sm:pl-3 rtl:sm:pr-3 rtl:pr-1.5 ltr:pl-1.5  cursor-pointer rounded-full " onClick={() => toggleSwatch()}>
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none" className='animate-spin-slow '>
          <g clipPath="url(#clip0_2113_892)">
          <path d="M12.1862 0.304079C12.5096 0.304079 12.7989 0.505379 12.9078 0.806779L13.6844 2.95948C13.9627 3.02878 14.2014 3.09808 14.4038 3.17068C14.6249 3.24988 14.9098 3.36978 15.2618 3.53368L17.0702 2.57668C17.2178 2.49848 17.3868 2.47025 17.5518 2.49623C17.7168 2.52221 17.869 2.601 17.9854 2.72078L19.576 4.36528C19.7872 4.58418 19.8466 4.90428 19.7278 5.18368L18.8797 7.17138C19.0205 7.42988 19.1327 7.65098 19.2185 7.83578C19.3109 8.03708 19.4253 8.31428 19.5617 8.67178L21.5384 9.51878C21.8354 9.64528 22.0191 9.94228 21.9993 10.2602L21.8541 12.5427C21.8442 12.691 21.7909 12.8331 21.701 12.9514C21.611 13.0697 21.4883 13.159 21.3481 13.2082L19.4759 13.8737C19.422 14.1322 19.3659 14.3533 19.3065 14.5403C19.2107 14.8291 19.1013 15.1132 18.9787 15.3917L19.9192 17.4707C19.9856 17.6168 20.0035 17.7802 19.9702 17.9372C19.9369 18.0942 19.8543 18.2364 19.7344 18.343L17.9458 19.9402C17.828 20.0449 17.681 20.1112 17.5245 20.13C17.368 20.1489 17.2095 20.1195 17.0702 20.0458L15.2266 19.069C14.9382 19.2217 14.6406 19.3565 14.3356 19.4727L13.5304 19.7741L12.8154 21.7541C12.7624 21.8991 12.6668 22.0247 12.5412 22.1144C12.4156 22.2041 12.2658 22.2537 12.1114 22.2568L10.0214 22.3041C9.86296 22.3082 9.70713 22.2632 9.57534 22.1751C9.44356 22.0871 9.3423 21.9603 9.2855 21.8124L8.4429 19.5827C8.15542 19.4844 7.87077 19.378 7.5893 19.2637C7.35909 19.164 7.13236 19.0565 6.9095 18.9414L4.8195 19.8346C4.68179 19.8933 4.52997 19.9108 4.38252 19.8848C4.23507 19.8588 4.09835 19.7906 3.989 19.6883L2.4424 18.2374C2.32726 18.1298 2.24884 17.9888 2.21824 17.8342C2.18764 17.6797 2.20642 17.5194 2.2719 17.3761L3.1706 15.4181C3.05108 15.1862 2.94027 14.9499 2.8384 14.7097C2.7195 14.4157 2.60945 14.1182 2.5084 13.8176L0.539404 13.2181C0.379355 13.1697 0.239758 13.0698 0.142293 12.934C0.0448279 12.7981 -0.00505043 12.6339 0.000404216 12.4668L0.0774042 10.3537C0.0828851 10.2158 0.125955 10.0821 0.201955 9.96689C0.277955 9.85173 0.383994 9.75953 0.508604 9.70028L2.5744 8.70808C2.6701 8.35718 2.7537 8.08438 2.8274 7.88528C2.93118 7.61935 3.04642 7.35804 3.1728 7.10208L2.2774 5.21008C2.20945 5.0664 2.18882 4.90487 2.21847 4.74872C2.24811 4.59258 2.32652 4.44985 2.4424 4.34108L3.9868 2.88248C4.09507 2.78037 4.23053 2.71172 4.37689 2.68479C4.52326 2.65786 4.67429 2.67379 4.8118 2.73068L6.8996 3.59308C7.1306 3.43908 7.3396 3.31478 7.5288 3.21468C7.7543 3.09478 8.05571 2.96938 8.4352 2.83408L9.1612 0.808979C9.21488 0.660774 9.31299 0.532749 9.44214 0.442383C9.57129 0.352018 9.72518 0.303718 9.8828 0.304079H12.1862ZM11.6472 1.81878H10.4229L9.7574 3.68218C9.71827 3.79083 9.65497 3.88918 9.57226 3.96978C9.48956 4.05039 9.38963 4.11115 9.28 4.14748C8.8004 4.30698 8.4539 4.44448 8.2515 4.55118C8.037 4.66448 7.7631 4.83718 7.4375 5.06818C7.33094 5.14297 7.20721 5.18964 7.0778 5.20387C6.94839 5.2181 6.81748 5.19943 6.6972 5.14958L4.6842 4.31908L3.8999 5.06048L4.7172 6.78748C4.76613 6.89023 4.79097 7.00279 4.78983 7.11659C4.78869 7.23039 4.76159 7.34243 4.7106 7.44418C4.4906 7.88528 4.3421 8.21088 4.2673 8.41108C4.1526 8.74435 4.05349 9.08278 3.9703 9.42528C3.94267 9.53248 3.89192 9.63233 3.82161 9.71784C3.7513 9.80335 3.66314 9.87244 3.5633 9.92028L1.5943 10.8652L1.5547 11.9432L3.3367 12.4844C3.5732 12.5559 3.7602 12.7374 3.8383 12.9706C4.0143 13.4986 4.1551 13.888 4.2563 14.1322C4.3904 14.4421 4.53869 14.7456 4.7007 15.0419C4.75552 15.1438 4.78593 15.257 4.78956 15.3727C4.79319 15.4884 4.76992 15.6033 4.7216 15.7085L3.8955 17.5103L4.6776 18.2451L6.6378 17.4069C6.74339 17.3618 6.8577 17.3407 6.97243 17.3453C7.08716 17.3498 7.19944 17.3799 7.3011 17.4333C7.7026 17.6445 8.0018 17.7908 8.191 17.8711C8.3835 17.9514 8.752 18.0856 9.2866 18.2682C9.39273 18.3044 9.48956 18.3636 9.57018 18.4416C9.6508 18.5195 9.71322 18.6143 9.753 18.7192L10.5318 20.7773L11.5504 20.7553L12.2071 18.9359C12.2447 18.8321 12.3044 18.7376 12.382 18.6592C12.4597 18.5808 12.5536 18.5201 12.657 18.4816L13.7977 18.0548C14.0859 17.9481 14.4357 17.7798 14.8438 17.5488C14.9568 17.4853 15.0838 17.4513 15.2134 17.4497C15.3429 17.4482 15.4708 17.4792 15.5852 17.54L17.3199 18.4585L18.2956 17.5884L17.442 15.7041C17.3982 15.6073 17.3754 15.5024 17.3752 15.3962C17.375 15.29 17.3974 15.185 17.4409 15.0881C17.6411 14.6404 17.7764 14.3027 17.8446 14.0871C17.9117 13.8759 17.981 13.5712 18.0481 13.1796C18.0712 13.0466 18.1293 12.9221 18.2165 12.819C18.3037 12.716 18.4168 12.6381 18.5442 12.5933L20.357 11.9498L20.4362 10.6958L18.6542 9.93238C18.5593 9.89199 18.4736 9.83275 18.4024 9.75825C18.3311 9.68375 18.2757 9.59554 18.2395 9.49898C18.1124 9.14834 17.9737 8.80202 17.8237 8.46058C17.6817 8.16328 17.5275 7.87191 17.3617 7.58718C17.3043 7.48658 17.2709 7.37405 17.2642 7.2584C17.2575 7.14275 17.2777 7.02712 17.3232 6.92058L18.1207 5.05058L17.2803 4.18158L15.6435 5.04838C15.5366 5.10505 15.418 5.13587 15.2971 5.13835C15.1761 5.14084 15.0563 5.11492 14.9472 5.06268C14.5998 4.88994 14.2445 4.73357 13.8824 4.59408C13.5737 4.4904 13.2588 4.40591 12.9397 4.34108C12.8131 4.31423 12.6953 4.25562 12.5976 4.17076C12.4998 4.0859 12.4253 3.97758 12.3809 3.85598L11.6461 1.81768L11.6472 1.81878ZM11.0268 6.50918C13.7053 6.50918 15.8778 8.65748 15.8778 11.3063C15.8778 13.9551 13.7053 16.1023 11.0268 16.1023C8.3472 16.1023 6.1758 13.9551 6.1758 11.3063C6.1758 8.65748 8.3472 6.51028 11.0268 6.51028V6.50918ZM11.0268 8.02498C9.1931 8.02498 7.707 9.49348 7.707 11.3063C7.707 13.1191 9.1931 14.5887 11.0268 14.5887C12.8594 14.5887 14.3455 13.1191 14.3455 11.3063C14.3455 9.49348 12.8605 8.02498 11.0268 8.02498Z" fill="white"/>
          </g>
          <defs>
          <clipPath id="clip0_2113_892">
          <rect width="22" height="22" fill="white" transform="translate(0 0.304077)"/>
          </clipPath>
          </defs>
          </svg>
      </div>
    </div>
    <div className="color_switch w-full h-full fixed top-0 z-50 transition-all pl-4 -right-full" id="color-swatch">
    <div className=" absolute top-0 left-0 w-full h-full z-10"  onClick={() => toggleSwatch()}></div>
      <div className="sm:max-w-[370px] max-w-[300px] w-full bg-white h-full z-20 relative mx-auto mr-0 page-overlay overflow-auto p-6">
      <div className="flex items-center justify-between lg:pb-6 pb-3 sm:pb-4 mb-4 sm:mb-6 lg:mb-6 border-b border-gray-400/20 w-full">
        <h2 className="sm:text-xl text-[22px] text-gray-800">Customize Setting</h2>
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none"  onClick={() => toggleSwatch()} className="cursor-pointer stroke-current stroke-2 stroke-gray-800">
        <path d="M8.16602 8.27478L19.8327 19.9414M8.16602 19.9414L19.8327 8.27478"  />
        </svg>
      </div>

      <div className=" w-full">
      <p className="text-sm sm:text-md uppercase font-semibold text-gray-800 mb-4">Color Option</p>
       <label
          name="theme"
          id="theme-select"
          className="bg-white dark:text-white text-gray-800  overflow-hidden theme-select flex items-center gap-3 flex-wrap"
         >
          {themes.map(t => (
            <button key={t.name.toLowerCase()}  onClick={(e) => setTheme_fun(e.currentTarget.value)} value={t.name.toLowerCase()}><span className="switch-icon"></span>{t.name}</button>
          )
          )}
        </label>
        </div>

        <div className="mt-10 w-full">
        <p className="text-sm sm:text-md uppercase font-semibold text-gray-800 mb-4">Navbar Type</p>

        <label
          name="theme"
          id="theme-select"
          className="bg-white dark:text-white text-gray-800  overflow-hidden Navtheme-select flex items-center gap-3 flex-wrap"
         >
          {sticky.map(s => (
            <button key={s.name.toLowerCase()}  onClick={(e) => setNavsticky(s.name.toLowerCase())} value={s.name.toLowerCase()}>{s.name}</button>
          )
          )}
        </label>

           {/*<RadioGroup label=""  onValueChange={setSelected} value={selected} orientation="horizontal" size="sm" color="secondary" className="capitalize  text-[12px] font-semibold">

           {sticky.map(s => (
            <Radio key={s.name.toLowerCase()}  onClick={(e) => setNavsticky(s.name.toLowerCase())} value={s.name.toLowerCase()} className=""  boolean="false">{s.name}</Radio>
          )
          )}
          </RadioGroup>*/}
        </div>

        <div className="mt-10  w-full">
          <p className="text-sm sm:text-md uppercase font-semibold text-gray-800 mb-4">Direction</p>
           <label
              name="theme"
              id="theme-select"
              className="bg-white dark:text-white text-gray-800  overflow-hidden theme-select flex items-center gap-3 flex-wrap"
             >
              {layout.map(t => (
                <button key={t.name.toLowerCase()}  onClick={(e) => setLayout(e.currentTarget.value)} value={t.name.toLowerCase()} className="justify-center">{t.name}</button>
              )
              )}
            </label>


        </div>

        </div>
      </div>
    </div>
  )
}

export default ThemeChanger;