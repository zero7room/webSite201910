/**
 * @file
 * Created by wangzeqi .
 */
import "common/widget/nav/nav.less";
import React, {PropTypes} from 'react';



export default React.createClass({

    render () {
        return (
			<section style={{width: "200px"}}>
  				<ul className="sidebar-menu">
	  				<li className="sidebar-header">MAIN NAVIGATION</li>
					<li>
						<a href="#">
						  <i className="fa fa-dashboard"></i> <span>Dashboard</span> <i className="fa fa-angle-left pull-right"></i>
						</a>
						<ul className="sidebar-submenu">
						  <li><a href="#"><i className="fa fa-circle-o"></i> Dashboard v1</a></li>
						  <li><a href="#"><i className="fa fa-circle-o"></i> Dashboard v2</a></li>
						</ul>
					</li>
			    </ul>
		  	</section>
        );
    },
    componentDidMount () {
        $.sidebarMenu = function(menu) {
          var animationSpeed = 300,
            subMenuSelector = '.sidebar-submenu';

          $(menu).on('click', 'li a', function(e) {
            var $this = $(this);
            var checkElement = $this.next();

            if (checkElement.is(subMenuSelector) && checkElement.is(':visible')) {
              checkElement.slideUp(animationSpeed, function() {
                checkElement.removeClass('menu-open');
              });
              checkElement.parent("li").removeClass("active");
            }

            //If the menu is not visible
            else if ((checkElement.is(subMenuSelector)) && (!checkElement.is(':visible'))) {
              //Get the parent menu
              var parent = $this.parents('ul').first();
              //Close all open menus within the parent
              var ul = parent.find('ul:visible').slideUp(animationSpeed);
              //Remove the menu-open class from the parent
              ul.removeClass('menu-open');
              //Get the parent li
              var parent_li = $this.parent("li");

              //Open the target menu and add the menu-open class
              checkElement.slideDown(animationSpeed, function() {
                //Add the class active to the parent li
                checkElement.addClass('menu-open');
                parent.find('li.active').removeClass('active');
                parent_li.addClass('active');
              });
            }
            //if this isn't a link, prevent the page from being redirected
            if (checkElement.is(subMenuSelector)) {
              e.preventDefault();
            }
          });
        };
        $.sidebarMenu($('.sidebar-menu'))
    }
});