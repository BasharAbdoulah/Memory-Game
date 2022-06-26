(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{118:function(e,t,r){"use strict";var s=r(0),a=r.n(s);class o extends s.Component{constructor(e){super(e)}render(){const e=a.a.Children.toArray(this.props.children);return a.a.createElement("div",{className:"mediaPreview"},e.map((e,t)=>a.a.createElement("div",{className:"mediaPreview-row",key:"media-preview-"+t},e)))}}t.a=o},119:function(e,t,r){"use strict";r.d(t,"a",(function(){return p}));r(14);var s,a,o,n=r(1),i=r.n(n),l=r(0),c=r.n(l),d=r(4),m=r(7);r(312);class p extends l.Component{render(){const e=this.props.title||"Keywords";return c.a.createElement("div",{id:e,className:"stockItemSeoLinks"},c.a.createElement("h3",{className:"stockItemSeoLinks-subHeader"},e),this.renderLinks(this.buildKeywordLinks()))}renderLinks(e){return c.a.createElement("p",{className:"stockItemSeoLinks-links"},e.map(e=>c.a.createElement("span",{className:"stockItemSeoLinks-link","data-selenium-value":e.title,key:e.id},c.a.createElement("a",{href:e.url},e.title))))}buildKeywordLinks(){return this.props.keywords.map(e=>({id:e,url:m.e.getInstance().getSearchRoute()+"/"+encodeURIComponent(e).replace(/%20/g,"+")+"?search-origin="+d.f.DETAILS_PAGE,title:e}))}}s=p,a="propTypes",o={title:i.a.string,keywords:i.a.arrayOf(i.a.string)},a in s?Object.defineProperty(s,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):s[a]=o},120:function(e,t,r){"use strict";var s=r(0),a=r.n(s);class o extends s.Component{constructor(e){super(e)}render(){const e=a.a.Children.toArray(this.props.children);return a.a.createElement("div",{className:"downloadOptions-row"},e.map((e,t)=>a.a.createElement("div",{key:"downloadOption-"+t},e)))}}t.a=o},121:function(e,t,r){"use strict";r.d(t,"a",(function(){return f}));var s,a,o,n=r(1),i=r.n(n),l=r(0),c=r.n(l),d=r(2),m=r(46);class p extends l.Component{render(){return c.a.createElement(m.a,{currentStockItems:this.props.stockItems,searchLogParameters:this.props.searchLogParameters,isLoading:!1,isLoadingAdditionalResults:!1,selectedStockItemDetails:null,selectedStockItemIndex:null,onCloseButtonClicked:()=>this.deselectStockItems(),redirectToSignUpLink:this.props.features.redirectToSignUpLink,isEnterpriseMember:this.props.features.isEnterpriseMember,shouldShowAddToFavorites:this.props.shouldShowAddToFavorites,context:"details",stockItemContainerResponsiveClassNames:this.props.stockItemCardResponsiveClassNames,useSubscriptionlessSignUpEnticement:this.props.features.useSubscriptionlessSignUpEnticement})}}s=p,a="propTypes",o={stockItems:i.a.array,stockItemCardResponsiveClassNames:i.a.array},a in s?Object.defineProperty(s,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):s[a]=o;var u=Object(d.c)((function(e){const t=e.app.search;return{features:e.details.features,isLoading:t.isLoading,isLoadingAdditionalResults:t.isLoadingAdditionalResults,searchLogParameters:t.searchLogParameters,shouldShowAddToFavorites:e.details.features.shouldShowAddToFavorites}}))(p),h=r(4),b=r(7);class k extends l.Component{render(){let e="Similar "+b.e.getInstance().getStockItemName();return this.props.searchType===h.b.FOOTAGE?e="Similar Footage":this.props.searchType===h.b.AE_TEMPLATE?e="Similar Templates":this.props.searchType===h.b.MOTION_BG&&(e="Similar Backgrounds"),this.props.stockItems.length>0?c.a.createElement("div",{className:"similar-stock-items"},c.a.createElement("h3",null,e),this.props.children):null}}!function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}(k,"propTypes",{stockItems:i.a.array,searchType:i.a.string});class f extends l.Component{render(){return c.a.createElement(k,{stockItems:this.props.stockItems,contentType:this.props.contentType},c.a.createElement(u,{stockItems:this.props.stockItems}))}}!function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}(f,"propTypes",{stockItems:i.a.array,contentType:i.a.string})},122:function(e,t,r){"use strict";var s,a,o,n=r(444),i=r.n(n),l=r(28),c=r.n(l),d=r(176),m=r.n(d),p=r(6),u=r.n(p),h=r(1),b=r.n(h),k=r(0),f=r.n(k),g=r(2),E=r(8),v=r(4),w=r(157),I=r(5);class y extends k.Component{render(){return f.a.createElement("ul",{className:"colors"},this.props.colors.map((e,t)=>{const r={border:this.colorIsTooBright(e.hex_code)?"solid 1px #cecece":"none",backgroundColor:"#"+e.hex_code};return f.a.createElement("li",{key:t,className:"colorsColor"},f.a.createElement("div",{className:"colorsColor-link",style:r}," "))}))}colorIsTooBright(e){return 6===e.length&&this.calculateBrightnessForHex(e)>220}calculateBrightnessForHex(e){const t=parseInt(e,16);return.2126*(t>>16&255)+.7152*(t>>8&255)+.0722*(t>>0&255)}}function x(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}s=y,a="propTypes",o={colors:b.a.arrayOf(b.a.shape({hex_code:b.a.string,percentage:b.a.number}))},a in s?Object.defineProperty(s,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):s[a]=o;class C extends k.Component{render(){const e=this.getFilteredSpecKeys(),t=this.renderColors();return f.a.createElement(f.a.Fragment,null,f.a.createElement("ul",{className:u()("stockItemInfo-stockSpec")},e.map(e=>this.renderItem(e))),t)}renderLabel(e){return C.labels[e]||e}renderItem(e){const t=c()(this,`props.stockItemFormat[${e}]`),r=C.artistKeys.includes(e)?this.getArtistValue(e):c()(this,`props.stockItem[${e}]`),s=t||r;return void 0===s?null:f.a.createElement("li",{key:e,className:"stockItemInfo-stockSpecItem"},f.a.createElement("span",{className:"stockItemInfo-stockSpecItemKey"},this.renderLabel(e)),": ",f.a.createElement("span",{className:"stockItemInfo-stockSpecItemValue"},this.renderSpec(e,s)))}getSpecKeys(){const{stockItem:e}=this.props,t=Object(I.h)(),r=e.contributor,s=e.searchType===v.b.AE_TEMPLATE,a=e.maxResolution;if("graphicstock"===t){const e=["resolution","dpi","colors","hasTalentReleased","hasPropertyReleased","isEditorial"],t=m()([e,"downloads","rating"]);return r&&t.push("contributor"),t}if("videoblocks"===t){let e=["duration","frameRate","softwarePlugins","softwareVersion"];return s||e.push("hasAlphaChannel"),e=m()([e,"hasTalentReleased","hasPropertyReleased","isEditorial"]),e=a?m()(["maxResolution",e]):m()(["resolution",e]),e=r?m()(["contributor",e,"rating"]):m()([e,"downloads","rating"]),e}if("audioblocks"===t){let t=["filename","type","bpm","duration"];return"music"===e.searchType&&t.push("artists"),t=i()(m()([t,...C.artistKeys,"rating"])),t}}getFilteredSpecKeys(){const e=["rating","downloads","filename","colors","contributor","resolution","maxResolution","dimensions"];return this.getSpecKeys().filter(t=>!e.includes(t))}renderColors(){if(!this.getSpecKeys().find(e=>"colors"===e))return null;const e=c()(this,"props.stockItem['colors']");return f.a.createElement("div",{className:"stockItemInfo-stockSpecColors"},f.a.createElement("span",{className:"stockItemInfo-stockSpecItemKey"},this.renderLabel("colors")),": ",f.a.createElement("span",{className:"stockItemInfo-stockSpecItemValue"},this.renderSpec("colors",e)))}getArtistValue(e){const t=c()(this,"props.stockItemArtists");switch(e){case"artists":const e=t.map(e=>e.alias).filter(Boolean).join(", ");return e.length?e:void 0;case"artistFullNames":return t.map(e=>Object(I.g)(e)).filter(Boolean).join(", ");case"publisher":return t.map(e=>e.publisher).filter(Boolean).join(", ");case"pro":return t.map(e=>e.artistPro).filter(Boolean).join(", ");case"publisherPro":return t.map(e=>e.publisherPro).filter(Boolean).join(", ");default:return}}renderSpec(e,t){switch(e){case"dimensions":return`${t[0]} x ${t[1]}`;case"hasTalentReleased":case"hasPropertyReleased":case"hasAlphaChannel":case"isEditorial":return t?"Yes":"No";case"downloads":return t.toLocaleString();case"duration":return t?f.a.createElement(w.a,{seconds:t}):"Not Available";case"colors":return f.a.createElement(y,{colors:t});case"frameRate":return t;case"contributor":return f.a.createElement("a",{className:"contributor-link",href:t.portfolioLink},t.username);case"softwarePlugins":return t||"None";case"softwareVersion":return t||"Not Available";case"type":return"sfx"===t?"Sound Effect":t.charAt(0).toUpperCase()+t.slice(1);case"pro":case"publisher":case"publisherPro":return t||"None";default:return t}}}x(C,"propTypes",{stockItem:b.a.object,stockItemFormat:b.a.object,stockItemArtists:b.a.arrayOf(b.a.object),onRatingSelected:b.a.func,isSavingRating:b.a.bool}),x(C,"labels",{dimensions:"Resolution",dpi:"DPI",colors:"Colors",hasTalentReleased:"Model Release",hasPropertyReleased:"Property Release",isEditorial:"Editorial",contributor:"Contributor",rating:"Rating",downloads:"Downloads",duration:"Duration",frameRate:"Frame Rate",hasAlphaChannel:"Alpha Channel",softwarePlugins:"Required Plugins",softwareVersion:"Software Version",resolution:"Resolution",maxResolution:"Resolution",bpm:"BPM",type:"Type",artists:"Artists",artistFullNames:"Artist Full Names",pro:"Pro",publisher:"Publisher",publisherPro:"Publisher PRO",filename:"Filename"}),x(C,"artistKeys",["artists","artistFullNames","publisher","pro","publisherPro"]);class S extends k.Component{constructor(...e){super(...e),x(this,"state",{readMore:!1,showDetails:this.props.expanded||!1})}toggleReadMore(){this.setState({readMore:!this.state.readMore})}toggleShowDetails(){this.setState({showDetails:!this.state.showDetails}),E.Telemetry.increment("stock.details.toggleMoreDetails")}render(){return f.a.createElement("div",{className:"stockItemInfo"},f.a.createElement("div",{className:"stockItemInfoRow"},this.renderTitle()),this.renderStockItemInfo(),f.a.createElement("div",{className:"stockItemInfoRow"},f.a.createElement("div",{className:"stockItemInfoSection details"},this.renderDetails()),f.a.createElement("div",{className:"stockItemInfoSection"},this.renderActions())),f.a.createElement("div",{className:"stockItemInfoRow"},this.renderDescription()))}renderStockItemInfo(){const e=this.state.showDetails?"expanded":"collapsed";return f.a.createElement("div",{className:"stockItemInfoRow"},f.a.createElement("div",{className:"stockItemInfoSection specs"},f.a.createElement("div",{className:"stockItemInfo-stockSpec stockItemInfo-minimizedDetails"},this.renderContributor(this.props.stockItem.contributor),this.renderResolution(this.props.stockItem.maxResolution))),f.a.createElement("div",{className:"stockItemInfoSection"},f.a.createElement("div",{className:"stockItemInfo-viewMore",onClick:this.toggleShowDetails.bind(this)},this.state.showDetails?"Fewer":"More"," Details",f.a.createElement("i",{className:"fa fa-fw fa-angle-right expanderIcon "+e}))))}renderContributor(e){return e?f.a.createElement("div",{className:"stockItemInfo-stockSpecContributor"},f.a.createElement("span",{className:"stockItemInfo-stockSpecItemKey"},"Contributor: "),f.a.createElement("span",{className:"stockItemInfo-stockSpecItemValue"},f.a.createElement("a",{className:"contributor-link",href:e.portfolioLink},e.username))):null}renderResolution(e){return e?f.a.createElement("div",{className:"stockItemInfo-stockSpecResolution"},f.a.createElement("span",{className:"stockItemInfo-stockSpecItemKey"},"Resolution: "),f.a.createElement("span",{className:"stockItemInfo-stockSpecItemValue"},e)):null}renderTitle(){return f.a.createElement("h1",{className:"stockItemInfo-title","data-selenium-value":this.props.stockItem.title},this.props.stockItem.title)}renderDetails(){return f.a.createElement("div",{className:u()("stockItemInfo-details",{hidden:!this.state.showDetails})},f.a.createElement(C,{stockItem:this.props.stockItem,stockItemFormat:this.props.selectedAcquisitionOption,stockItemArtists:this.props.stockItemArtists,isSavingRating:!1}))}renderActions(){return f.a.createElement("div",{className:"stockItemInfo-actions"},this.props.children)}renderDescription(){const e=this.props.stockItem.description,t=this.props.stockItem.isTemplate;if(e&&t&&this.state.showDetails)return f.a.createElement("div",{className:"stockItemInfo-descContainer"},f.a.createElement("p",{className:u()({"stockItemInfo-truncated":!this.state.readMore})},f.a.createElement("b",null,"Template Description: "),e),e.length>275&&f.a.createElement("p",{className:"stockItemInfo-showMore",onClick:()=>this.toggleReadMore()},this.state.readMore?"show less":"show more"))}}x(S,"propTypes",{expanded:b.a.bool}),x(S,"defaultProps",{expanded:!1});t.a=Object(g.c)((function(e){return{stockItem:e.details.stockItem,stockItemArtists:e.details.stockItemArtists,selectedAcquisitionOption:e.details.selectedAcquisitionOption}}))(S)},123:function(e,t,r){"use strict";var s=r(0),a=r.n(s),o=r(2),n=r(5),i=r(353);class l extends s.Component{render(){return a.a.createElement("div",{className:"formatSelector"},this.renderAllFormats())}renderAllFormats(){const e=new Set,t=[];return this.props.stockItemFormats.forEach(r=>{e.has(r.downloadUrl)||(e.add(r.downloadUrl),t.push(r))}),t.map(e=>this.renderFormatButton(e,this.props.selectedAcquisitionOption&&this.props.selectedAcquisitionOption.formatName===e.formatName))}renderQualitySelector(e,t){return a.a.createElement("label",null,a.a.createElement("input",{type:"radio",name:"format-selector",value:e.id,checked:t,readOnly:!0}),this.qualityDescription(e)||this.formatName(e))}renderFormatButton(e,t){return this.renderFormatSelector(e,t)}renderFormatSelector(e,t){return a.a.createElement("div",{key:e.formatName,id:e.formatName,className:"formatSelector-row",onClick:this.buildSelectFormatHandler(e)},this.renderQualitySelector(e,t),a.a.createElement("div",{className:"formatSelector-info"},this.renderDownloadableOptionTitle(e)))}renderDownloadableOptionTitle(e){const t=Object(n.h)();return"videoblocks"===t?`${this.formatName(e)} ${this.formatCodec(e)} - ${e.filesize}`:"audioblocks"===t?`(${"MP3"===e.label?"320 kbps":"44,100 Hz"}) - ${e.filesize}`:e.filesize}formatCodec(e){return e.codec?"("+e.codec+")":null}qualityDescription(e){return"AET"===e.label?"AE":"AMT"===e.label?"AMT":"PPT"===e.label?"PPT":e.quality}formatName(e){return e.formatName}buildSelectFormatHandler(e){return t=>{this.props.dispatch(Object(i.b)(e))}}}t.a=Object(o.c)((function(e){return{stockItem:e.details.stockItem,selectedAcquisitionOption:e.details.selectedAcquisitionOption,stockItemFormats:e.details.stockItemFormats}}))(l)},191:function(e,t,r){},207:function(e,t,r){"use strict";var s=r(59);t.a=e=>Object(s.b)(e,s.f)},208:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var s=r(1),a=r.n(s),o=r(0),n=r.n(o);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class l extends o.Component{constructor(...e){super(...e),i(this,"state",{isOpen:!1})}render(){return n.a.createElement("div",{className:"openOnClickOverlay"},n.a.createElement("div",{className:"openOnClickOverlay-clickListener",onClick:this.toggleOpenStatusHandler()},this.props.children.clickToOpen),n.a.createElement("div",{className:"openOnClickOverlay-popOpenWrapper"},this.state.isOpen?n.a.cloneElement(this.props.children.opensOnClick,{dismissHandler:this.toggleOpenStatusHandler()}):null))}toggleOpenStatusHandler(){return()=>{this.props.onClick&&this.props.onClick(),this.setState({isOpen:!this.state.isOpen})}}}i(l,"propTypes",{onClick:a.a.func})},312:function(e,t,r){},444:function(e,t,r){var s=r(621);e.exports=function(e){return e&&e.length?s(e):[]}},62:function(e,t,r){"use strict";r.d(t,"a",(function(){return Q}));var s,a,o,n=r(0),i=r.n(n),l=r(8),c=r(210),d=r(208),m=r(1),p=r.n(m),u=r(332);class h extends n.Component{render(){return i.a.createElement(u.a,{postSignUpUrl:this.props.detailsRoute+"?preview=1",dismissHandler:this.props.dismissHandler,tagLine:"Want to download a preview?",type:"preview"})}}s=h,a="propTypes",o={dismissHandler:p.a.func,detailsRoute:p.a.string},a in s?Object.defineProperty(s,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):s[a]=o;var b=r(5);class k extends n.Component{render(){return this.props.makerEditorLink?i.a.createElement("div",{className:"makerEditorActionsHook hidden lg:block shadow-md border border-solid border-gray-200 relative rounded-l w-full px-6 py-12 my-4"},i.a.createElement("div",{className:"md:text-l lg:text-xl xl:text-2xl 2xl:text-3xl font-bold text-pink-500 mb-10"},i.a.createElement("img",{className:"xl:w-32 mx-2",src:__ASSETS_COMMON_IMAGES_URL__+"/icons/maker.svg",alt:"Maker"}),i.a.createElement("span",{className:"align-bottom ml-4"},"Customize this stock item using Maker, our simple video editor")),i.a.createElement("div",{className:"flex align-content-start text-center text-sm lg:text-base"},(this.props.contentClass===b.a||this.props.contentClass===b.c)&&i.a.createElement("a",{href:this.props.makerEditorLink+"&trimItem="+this.props.stockItemId,onClick:()=>l.Telemetry.increment("maker.details.cta.click.test.trim."+this.props.contentClass),className:"w-1/3 mx-4 text-black font-bold transition-colors bg-white hover:bg-black hover:text-white rounded-full py-2 px-10 no-underline border-black border-solid border-2"},"Trim"),(this.props.contentClass===b.a||this.props.contentClass===b.b)&&i.a.createElement("a",{href:this.props.makerEditorLink,onClick:()=>l.Telemetry.increment("maker.details.cta.click.test.start."+this.props.contentClass),className:"w-1/3 mx-4 text-black font-bold transition-colors bg-white hover:bg-black hover:text-white rounded-full py-2 px-10 no-underline border-black border-solid border-2"},"Start a video project"),(this.props.contentClass===b.c||this.props.contentClass===b.b)&&i.a.createElement("a",{href:this.props.makerEditorLink+"&addText=Add%20Text%20Here",onClick:()=>l.Telemetry.increment("maker.details.cta.click.test.text."+this.props.contentClass),className:"w-1/3 mx-4 text-black font-bold transition-colors bg-white hover:bg-black hover:text-white rounded-full py-2 px-10 no-underline border-black border-solid border-2"},"Overlay text"),(this.props.contentClass===b.c||this.props.contentClass===b.b)&&i.a.createElement("a",{href:this.props.makerEditorLink+"&addLogo=1",onClick:()=>l.Telemetry.increment("maker.details.cta.click.test.logo."+this.props.contentClass),className:"w-1/3 mx-4 text-black font-bold transition-colors bg-white hover:bg-black hover:text-white rounded-full py-2 px-10 no-underline border-black border-solid border-2"},"Add your logo"))):null}}!function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}(k,"propTypes",{makerEditorLink:p.a.string.isRequired,stockItemId:p.a.string.isRequired,contentClass:p.a.string.isRequired});class f extends n.Component{render(){return this.props.makerEditorLink?i.a.createElement("div",{className:"makerEditorHook hidden lg:block lg:mb-4 xl:mb-auto"},i.a.createElement("span",{className:"makerEditorHook-newFlag"},"NEW"),i.a.createElement("p",{className:"makerEditorHook-title"},"Edit With ",i.a.createElement("span",{className:"makerEditorHook-brandName"},"Maker")),i.a.createElement("p",{className:"makerEditorHook-tagLine"},"Add this item to our simple editor to make a polished video in minutes."),i.a.createElement("a",{href:this.props.makerEditorLink,onClick:()=>l.Telemetry.increment("maker.details.cta.click"),className:"makerEditorHook-cta"},"Start Editing")):null}}!function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}(f,"propTypes",{makerEditorLink:p.a.string.isRequired});const g=e=>i.a.createElement("button",{className:"previewButton flex-nowrap relative flex p-1 space-x-1 text-xs bg-gray-100 border-0 rounded",onClick:e.previewHandler},i.a.createElement("img",{alt:"download preview icon",className:"h-4",src:__ASSETS_COMMON_IMAGES_URL__+"/icons/preview.svg"}),i.a.createElement("span",{className:"uppercase"},"PREVIEW"));g.propTypes={previewHandler:p.a.func},g.defaultProps={previewHandler:()=>{}};var E=g,v=r(2);function w(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class I extends n.Component{render(){return this.needsUpgradeToAccessContent()?this.unlimitedUpgradeMessaging():this.renderPriorDownloadDate()}needsUpgradeToAccessContent(){return this.props.needsToUpgrade}unlimitedUpgradeMessaging(){const{contentTypesString:e}=this.props;return i.a.createElement("div",{className:"memberDetailsDownloadInfo"},"Upgrade to Unlimited for unlimited downloads of ",e," ","from the Member Library.")}renderPriorDownloadDate(){return this.props.memberDownloadDate?i.a.createElement("div",{className:"memberDetailsDownloadInfo"},"You downloaded this item on ",this.props.memberDownloadDate):null}}w(I,"propTypes",{needsToUpgrade:p.a.bool,contentTypesString:p.a.string}),w(I,"defaultProps",{contentTypesString:"HD footage 4k clips, and After Effects"});var y=Object(v.c)((function(e){return{memberDownloadDate:e.details.memberDownloadDate}}))(I),x=r(7);function C(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class S extends n.Component{constructor(...e){super(...e),C(this,"recordEnterpriseLicenseClick",()=>{})}render(){const e=this.props.licenseRevampTest?"/license":"/business-solution/license-comparison";return this.props.isEnterpriseMember||this.needsUpgradeToAccessContent()?null:i.a.createElement("div",{className:"memberDownloadCtaDisclaimer"},i.a.createElement("div",{className:"memberDownloadCtaDisclaimer-wrapper"},i.a.createElement("p",null,"You're currently on our"," ",i.a.createElement("strong",null,x.e.getIndividualLicenseName()," License")),i.a.createElement("p",null,"Upgrade today to our ",i.a.createElement("a",{className:"memberDownloadCtaDisclaimer-enterpriseLink",href:e,onClick:this.recordEnterpriseLicenseClick,target:"_blank"},x.e.getBusinessLicenseName()," License")," for:"),i.a.createElement("ul",{className:"memberDownloadCtaDisclaimer-licenseBullets"},i.a.createElement("li",null,"$1M in indemnification"),i.a.createElement("li",null,"License to a company or business"))))}needsUpgradeToAccessContent(){return this.props.needsToUpgrade}}C(S,"propTypes",{needsToUpgrade:p.a.bool});var N=Object(v.c)((function(e){return{isEnterpriseMember:e.details.member.isEnterpriseMember,licenseRevampTest:e.auth.featureFlags.licenseRevampTest}}))(S),T=r(10);class O extends n.Component{render(){const{subfolder:e,status:t,onClick:r}=this.props,s=this.exportToCloudLabel(t),a=e||"Cloud";return i.a.createElement("div",{className:"memberDownloadCta-export"},i.a.createElement(T.n,{disabled:t&&(t.isSucceeded||t.isRequested),label:`${s} ${a}`,onClick:r}))}exportToCloudLabel(e){return e?e.isRequested?"Exporting to ":e.isSucceeded?"Exported to ":"Export to ":"Export to"}}!function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}(O,"propTypes",{subfolder:p.a.string,status:p.a.shape({isRequested:p.a.bool,isSucceeded:p.a.bool,isFailed:p.a.bool}),onClick:p.a.func.isRequired});var P=O;function A(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class L extends n.Component{render(){return i.a.createElement("div",{className:"memberDownloadCta"},i.a.createElement("div",{className:"memberDownloadCta-cta"},i.a.createElement(T.n,{label:this.needsUpgradeToAccessContent()?"Upgrade to download this content":"Download",onClick:this.props.primaryActionHandler})),this.exportToCloudButton(),i.a.createElement("div",{className:"memberDownloadCta-detailActions"},this.props.children))}needsUpgradeToAccessContent(){return this.props.needsToUpgrade}exportToCloudButton(){if(!this.props.canExportToCloud||this.needsUpgradeToAccessContent())return null;const{cloudExportSubfolders:e=[],cloudExportStatus:t={},cloudExportSubfolderStatus:r={}}=this.props;return e.length?e.map(e=>i.a.createElement(P,{key:"exportSubfolder-"+e,subfolder:e,status:r[e],onClick:this.props.createExportActionHandler({exportSubfolder:e})})):i.a.createElement(P,{status:t,onClick:this.props.createExportActionHandler()})}}A(L,"propTypes",{primaryActionHandler:p.a.func,createExportActionHandler:p.a.func,needsToUpgrade:p.a.bool,contentTypesString:p.a.string}),A(L,"defaultProps",{contentTypesString:"HD footage 4k clips, and After Effects"});var D=Object(v.c)((function(e){return{stockItem:e.details.stockItem,downloadPermissions:e.details.features.downloadPermissions,memberDownloadDate:e.details.memberDownloadDate,isEnterpriseMember:e.details.member.isEnterpriseMember,canExportToCloud:e.details.canExportToCloud,cloudExportSubfolders:e.details.cloudExportSubfolders||[],cloudExportStatus:e.details.cloudExportStatus,cloudExportSubfolderStatus:e.details.cloudExportSubfolderStatus}}))(L);class M extends n.Component{constructor(...e){super(...e),function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}(this,"state",{displayPopover:!1})}togglePopover(e){this.setState({displayPopover:e})}render(){const{trigger:e,showTriangle:t,trianglePosition:r,triangleOffset:s,moreInfo:a,ctaLabel:o,ctaOnClick:n,ctaHref:l}=this.props;return i.a.createElement("div",{className:"Popover-container",onMouseLeave:()=>this.togglePopover(!1)},i.a.createElement("span",{className:"Popover-trigger",onMouseEnter:()=>this.togglePopover(!0)},e),i.a.createElement("div",{className:"Popover-body",onMouseLeave:()=>this.togglePopover(!1)},this.state.displayPopover&&i.a.createElement(T.m,{showTriangle:t,trianglePosition:r,triangleOffset:s,ctaOnClick:n,ctaHref:l,onCloseClick:()=>this.togglePopover(!1),moreInfo:a,ctaLabel:o},this.props.children)))}}var R=M,F=e=>i.a.createElement("ul",e,i.a.createElement("li",null,"Is issued to a business or entity"),i.a.createElement("li",null,"Provides $1,000,000 in indemnity"),i.a.createElement("li",null,"Puts no restrictions on production budget"),i.a.createElement("li",null,"Puts no restrictions on distribution")),j=r(292);function H(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class U extends n.Component{constructor(...e){super(...e),H(this,"handleCtaClick",()=>{window.location.href=this.buildUrl()})}render(){return i.a.createElement("div",null,!this.props.enterpriseLicenseIncludedText&&"Learn More About Our ",this.getPopoverWithBullets(),this.props.enterpriseLicenseIncludedText&&" Included")}getPopoverWithBullets(){return i.a.createElement(R,{ctaOnClick:this.handleCtaClick,ctaLabel:"Learn More",trigger:this.props.licenseType+" License"},i.a.createElement("p",null,"Content is yours to keep and use forever, 100% royalty-free. Our"," ",this.props.licenseType," License:"),this.getBullets())}getBullets(){return this.props.licenseType===x.e.getBusinessLicenseName()?i.a.createElement(F,null):i.a.createElement(j.a,null)}buildUrl(){const e={};this.props.sourcePageName&&(e.incoming_link=this.props.sourcePageName),this.props.abTestSegmentName&&(e.ab_test_split=this.props.abTestSegmentName);const t=window.__LICENSE_COMPARISON_TEST__?"/license":"/business-solution/license-comparison",r=Object.keys(e).map(t=>`${t}=${e[t]}`).join("&");return`${t}${r?"?"+r:""}`}}H(U,"propTypes",{abTestSegmentName:p.a.string,licenseType:p.a.oneOf([x.e.getBusinessLicenseName(),x.e.getIndividualLicenseName()]),enterpriseLicenseIncludedText:p.a.bool,sourcePageName:p.a.string}),H(U,"defaultProps",{abTestSegmentName:"",enterpriseLicenseIncludedText:!1,sourcePageName:""});var B=U;const _=e=>{const{makerEditorLink:t,signUpButtonCta:r,signUpHandler:s,contentClass:a,shouldShowMakerActionsHook:o=!1}=e,n=Object(v.f)(e=>e.details.stockItem),l=Object(v.f)(e=>e.details.stockItemFormats);return i.a.createElement("div",{className:"visitorSignUpButton"},i.a.createElement("p",{className:"visitorSignUpButton-cta"},i.a.createElement(T.n,{label:r,onClick:s})),i.a.createElement("div",{className:"visitorSignUpButton-detailActions"},e.children,i.a.createElement(c.a,{buttonClasses:"relative p-1 mx-2 my-0 text-xs bg-gray-100 border-none rounded uppercase",buttonText:"Add to Folder",stockItem:n,stockItemFormats:l,telemetryKey:"details",iconClassName:"w-4 h-4",alternateIconDefaultColor:"text-black",alternateIconInFolderColor:"text-black"})),a!==b.a&&!o&&i.a.createElement(f,{makerEditorLink:t}),i.a.createElement("div",{className:"visitorSignUpButton-cta-subtext"},i.a.createElement(B,{licenseType:x.e.getIndividualLicenseName()}),i.a.createElement(B,{licenseType:x.e.getBusinessLicenseName()})))};_.propTypes={makerEditorLink:p.a.string,signUpButtonCta:p.a.string,signUpHandler:p.a.func,shouldShowMakerActionsHook:p.a.bool};var q=_;class K extends n.Component{render(){const e=this.props.children.message?i.a.createElement("div",{className:"downloadMessaging-message"},this.props.children.message):null;return i.a.createElement("div",{className:"downloadMessaging"},i.a.createElement("div",{className:"downloadMessaging-title"},this.props.children.title),e)}}!function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}(K,"propTypes",{children:p.a.shape({title:p.a.node.isRequired,message:p.a.node})});var $=K,V=r(59);var W=e=>Object(V.b)(e,Object(V.a)(e=>e.details.member.isEnterpriseMember&&e.details.member.canDownloadNonWatermarkedComps,V.c,V.d)),G=r(207);var z=(e,t={})=>Object(V.b)({stockItem:e.stockItem,dispatch:e.dispatch,exportUrl:e.details.selectedAcquisitionOption.exportUrl,exportSubfolder:t.exportSubfolder},V.g);var Y=e=>Object(V.b)(e,V.h);r(191);class J extends n.Component{componentDidMount(){this.props.details.features.canDownloadPreviews&&"?preview=1"===window.location.search&&W(this.props)()}buildPreviewButton(){return this.props.details.features.canDownloadPreviews?i.a.createElement(E,{previewHandler:this.buildFreePreviewHandler()}):i.a.createElement(d.a,null,{clickToOpen:i.a.createElement(E,{previewHandler:()=>{}}),opensOnClick:i.a.createElement(h,{detailsRoute:this.props.stockItem.detailsUrl})})}buildFreePreviewHandler(){const e=W(this.props);return()=>{l.Telemetry.increment("preview.downloaded.details"),e()}}buildDownloadCta(e,t){return this.props.canDownload?this.buildMemberDownloadCta(e,t):this.buildNonSubscriberDownloadCta(t)}buildMakerHook(){return i.a.createElement(f,{makerEditorLink:this.generateMakerLink()})}buildMakerActionsHook(e){return i.a.createElement(k,{makerEditorLink:this.generateMakerLink(),contentClass:e,stockItemId:this.props.stockItem.id})}buildMemberDownloadCta(e,t){return i.a.createElement(i.a.Fragment,null,i.a.createElement(D,{primaryActionHandler:this.buildMemberDownloadHandler(),createExportActionHandler:(e={})=>z(this.props,e),contentTypesString:e},this.buildPreviewButton(),this.props.shouldShowAddToFavorites&&i.a.createElement(c.a,{buttonClasses:"relative p-1 mx-2 my-0 text-xs bg-gray-100 border-none rounded uppercase",buttonText:"Add to Folder",stockItem:this.props.stockItem,stockItemFormats:this.props.stockItemFormats,telemetryKey:"details",iconClassName:"w-4 h-4",alternateIconDefaultColor:"text-black",alternateIconInFolderColor:"text-black"})),this.shouldShowMakerHook(t)&&!this.props.shouldShowMakerActionsHook&&this.buildMakerHook(),i.a.createElement(N,{needsToUpgrade:this.upgradeRequiredForMember()}),i.a.createElement(y,{needsToUpgrade:this.upgradeRequiredForMember(),contentTypesString:e}))}buildMemberDownloadHandler(){const e=Object(G.a)(this.props);return()=>{l.Telemetry.increment("download.clicked.details"),e()}}buildNonSubscriberDownloadCta(e){const t=this.props.hasOtherSubscriptions?"Add "+Object(b.y)(e)+" Plan to Download this Content":this.props.isLoggedIn?"Subscribe to Download":"Sign Up to Download";return i.a.createElement(q,{makerEditorLink:this.generateMakerLink(),signUpButtonCta:t,signUpHandler:Y(this.props),contentClass:e,shouldShowMakerActionsHook:this.props.shouldShowMakerActionsHook},this.buildPreviewButton())}buildMemberLibraryMessaging(e){var t,r;const{hasSubscription:s,primarySubscription:a}=this.props,o=(null==a?void 0:a.isStarterBundle)||(null==a?void 0:a.isMakerOnly),n=(null==a?void 0:a.monthlyDownloadsRemaining)&&"cancel"!==(null==a||null===(t=a.status)||void 0===t||null===(r=t.toLowerCase)||void 0===r?void 0:r.call(t));let l="";l=s&&this.upgradeRequiredForMember()||o&&!n?"Upgrade To Download":o&&n?a.monthlyDownloadsRemaining+" downloads remaining this month":s?"Included in your subscription":this.props.detailPageAbTest?"Unlock unlimited downloads with a subscription plan":"Subscribe to download from our unlimited library";let c="";s||(c=this.props.detailPageAbTest?i.a.createElement("div",null,"Get access to our huge library of stock footage, music, After Effects templates, images, sound effects, and more with our"," ",i.a.createElement("a",{href:"/pricing"},"flexible plan options")):i.a.createElement("div",null,"Get all the stock you need, including ",e,", and more, with an ",i.a.createElement("a",{href:"/pricing"},"affordable plan")));const d=s?null:i.a.createElement("hr",{className:"stockItemDetails-divider"});return i.a.createElement("div",null,i.a.createElement($,null,{title:l,message:c}),d)}buildAssetId(){return i.a.createElement("div",{className:"mt-4"},"Asset ID: "+this.props.stockItem.assetId)}generateMakerLink(){const{makerPreCreateProjectRoute:e,makerSignupRoute:t}=this.props.details.makerHooks;return this.props.isLoggedIn?e:t}shouldShowMakerHook(e){return!this.props.isMobile&&e!==b.a}}function Q(e){var t;return{stockItem:e.details.stockItem,stockItemFormats:e.details.stockItemFormats,canDownload:!0===(null==e||null===(t=e.details)||void 0===t?void 0:t.canDownload),details:e.details,popUps:e.popUps,downloadPermissions:e.details.features.downloadPermissions,selectedAcquisitionOption:e.details.selectedAcquisitionOption,shouldShowAddToFavorites:e.details.features.shouldShowAddToFavorites,isLoggedIn:e.auth.isLoggedIn,makerHooksVisible:e.auth.permissions.makerHooksVisible,primarySubscription:e.auth.primarySubscription,shouldShowMakerActionsHook:e.auth.featureFlags.shouldShowMakerActionsHook,isMobile:e.auth.isMobile,detailPageAbTest:e.auth.featureFlags.detailPageAbTest}}t.b=J},621:function(e,t,r){var s=r(555),a=r(622),o=r(623),n=r(556),i=r(624),l=r(409);e.exports=function(e,t,r){var c=-1,d=a,m=e.length,p=!0,u=[],h=u;if(r)p=!1,d=o;else if(m>=200){var b=t?null:i(e);if(b)return l(b);p=!1,d=n,h=new s}else h=t?[]:u;e:for(;++c<m;){var k=e[c],f=t?t(k):k;if(k=r||0!==k?k:0,p&&f==f){for(var g=h.length;g--;)if(h[g]===f)continue e;t&&h.push(f),u.push(k)}else d(h,f,r)||(h!==u&&h.push(f),u.push(k))}return u}},622:function(e,t,r){var s=r(418);e.exports=function(e,t){return!!(null==e?0:e.length)&&s(e,t,0)>-1}},623:function(e,t){e.exports=function(e,t,r){for(var s=-1,a=null==e?0:e.length;++s<a;)if(r(t,e[s]))return!0;return!1}},624:function(e,t,r){var s=r(562),a=r(625),o=r(409),n=s&&1/o(new s([,-0]))[1]==1/0?function(e){return new s(e)}:a;e.exports=n},625:function(e,t){e.exports=function(){}},81:function(e,t,r){"use strict";var s=r(1),a=r.n(s),o=r(0),n=r.n(o),i=r(114),l=r(5),c=r(18),d=r(7);class m extends c.a{static saveErrorReport(e,t,r){const s=d.e.buildInstance().getDetailsReportErrorBasePath()+e,a={error_option:t,error_description:r};return this.request(s,this.buildFetchOptions("POST",a))}}var p=m;const u=({stockItemId:e})=>{const[t,r]=Object(o.useState)(!1),[s,a]=Object(o.useState)(!1),[c,d]=Object(o.useState)(""),[m,u]=Object(o.useState)(!1),[h,b]=Object(o.useState)(""),[k,f]=Object(o.useState)(!1),[g,E]=Object(o.useState)(""),[v,w]=Object(o.useState)(""),I=Object(o.useRef)(),y=[{label:"Preview does not play",value:"Preview does not play",relevantSites:["videoblocks"]},{label:"File does not download",value:"File does not download"},{label:"File does not work after downloading",value:"File does not work after downloading"},{label:"File not the same as shown in preview",value:"File not the same as shown in preview"},{label:"Other",value:"Other"}].filter(e=>!e.relevantSites||e.relevantSites.includes(Object(l.h)())),x=y.map(e=>e.value),C=!m||c&&x.includes(c),S=!k||!!h,N=C&&S&&!!c&&!!h;Object(o.useEffect)(()=>{C||S?C&&!S?E("Please enter a brief description of the problem"):!C&&S&&E("Please select a problem"):E("Please select a problem and enter a brief description")},[C,S]);const T=()=>{s||setTimeout(()=>{r(!1),a(!1),d(""),u(!1),b(""),f(!1),E(""),w("")},150)},O=e=>{e(),E("")};return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"flex justify-end h-5"},n.a.createElement("button",{className:"hover:underline m-0 text-xs text-blue-500 bg-transparent border-none",id:"report-error-button",onClick:()=>r(!0)},"Report an Error")),n.a.createElement(i.a,{id:"report-error-modal",isOpen:t,initiallyFocusedElement:I,contentLabel:"Report Error",onRequestClose:T,shouldCloseOnOverlayClick:!0,closeTimeoutMS:150},v?n.a.createElement("div",{className:"flex flex-col items-center space-y-10"},n.a.createElement("p",{className:"success-message m-0"},v),n.a.createElement("button",{className:"hover:bg-yellow-600 px-8 py-1 text-base font-semibold text-center transition-colors bg-yellow-500 border-none rounded-full cursor-pointer",id:"close-button",onClick:T},"Close")):n.a.createElement("form",{onSubmit:t=>{t.preventDefault(),N&&(a(!0),p.saveErrorReport(e,c,h).then(e=>e.json()).then(e=>{if(!e.success)throw new Error(e.message);E(""),w(e.message)}).catch(e=>{E(e.payload.message)}).finally(()=>{a(!1)}))}},n.a.createElement("div",{className:"space-y-8"},n.a.createElement("div",{className:"w-full"},n.a.createElement("label",{htmlFor:"problem-select",className:"block w-full m-0 font-semibhold "+(C?"":"text-red-500")},"Problem"),n.a.createElement("select",{className:"w-full px-3 py-2 border border-solid rounded "+(C?"border-gray-400":"border-red-500"),id:"problem-select",onBlur:()=>{(""!==c||m)&&u(!0)},onChange:({target:e})=>O(()=>d(e.value)),ref:I,value:c},n.a.createElement("option",{disabled:!0,defaultValue:!0,value:""},"What problem are you having?"),y.map(({label:e,value:t})=>n.a.createElement("option",{key:t,value:t},e)))),n.a.createElement("div",{className:"w-full"},n.a.createElement("label",{htmlFor:"description-input",className:"block w-full m-0 font-semibold "+(S?"":"text-red-500")},"Description"),n.a.createElement("textarea",{className:"leading w-full px-3 py-2 text-sm leading-5 tracking-wide border border-solid rounded "+(S?"border-gray-400":"border-red-500"),id:"description-input",name:"description-input",rows:"4",onBlur:()=>{(""!==h||k||m)&&(h&&!m&&u(!0),f(!0))},onChange:({target:e})=>O(()=>b(e.value)),value:h}))),n.a.createElement("p",{className:"px-2 m-0 mt-2 space-x-2 text-red-500"},(null==g?void 0:g.length)>0&&n.a.createElement(n.a.Fragment,null,n.a.createElement("i",{className:"fa fa-exclamation-circle","aria-hidden":"true"}),n.a.createElement("span",null,g))),n.a.createElement("div",{className:"flex-nowrap flex items-center justify-end w-full mt-10 space-x-10"},n.a.createElement("button",{className:"hover:underline disabled:cursor-not-allowed px-3 py-2 text-base text-center text-blue-500 bg-transparent border-none",id:"cancel-button",disabled:s,onClick:T},"Cancel"),n.a.createElement("button",{className:"disabled:cursor-not-allowed disabled:opacity-75 hover:bg-yellow-600 w-32 px-8 py-1 text-base font-semibold text-center transition-colors bg-yellow-500 border-none rounded-full cursor-pointer",disabled:!N||s,id:"submit-button",type:"submit"},s?n.a.createElement("i",{className:"fa fa-circle-o-notch fa-spin","aria-hidden":"true"}):"Submit")))))};u.propTypes={stockItemId:a.a.number.isRequired};t.a=u}}]);