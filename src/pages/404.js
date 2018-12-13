import React from 'react'
import { Link } from 'gatsby';
import s from '../scss/modules/errorpage.module.scss';
import { LogoCircle } from '../components/svg/LogoCircle';


const NotFoundPage = () => (
	<div className={s.errorPage}>
	  <div className={s.mainName}>
	     <Link to="/"><LogoCircle className={s.mainLogo}/></Link>
	  </div>
	  <div className={s.errorPageTitle}>
	    We couldn't find this page.
	  </div>
	  <div>
	  	<p>You may have typed an invalid URL.</p>
	    <p>
	      <img className={s.errorImage} src='/static/img/pizza-dog-optimized.svg' />
	    </p>
	  </div>
	  <div className={s.errorPageLinkSection}>
	    Here are a few links that may be helpful:
	    <br />
	    <ul className={s.errorPageLinkList}>
	      <li className={s.errorPageLinkItem}><a href="/" className={s.errorPageLink}>Home</a></li>
	      <span className={s.errorPageLinksDivider}>|</span>
	      <li className={s.errorPageLinkItem}><a href="/faq" className={s.errorPageLink}>FAQ</a></li>
	    </ul>
	  </div>
	</div>

)

export default NotFoundPage
