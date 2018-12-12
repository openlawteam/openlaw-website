import React from 'react'
import { Link } from 'gatsby';
import s from '../scss/modules/errorpage.module.scss';
import { LogoCircle } from '../components/svg/LogoCircle';
import { PizzaDogSVG } from '../components/svg/PizzaDogSVG'

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
	      <PizzaDogSVG/>
	    </p>
	  </div>
	  <div className="error-page-links">
	    Here are a few links that may be helpful:
	    <br />
	    <ul>
	      <li><a href="/">Home</a></li>
	      <span className="error-page-links-divider">|</span>
	      <li><a href="/faq">FAQ</a></li>
	    </ul>
	  </div>
	</div>

)

export default NotFoundPage
