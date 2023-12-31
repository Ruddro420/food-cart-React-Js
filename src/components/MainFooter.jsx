
import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import { logo } from '../../public/img';
import './Components.css'

const MainFooter = () => {
  return (
    <div>
      <Footer container>
        <div className="w-full mt-10">
          <div className="grid w-50 justify-between sm:flex sm:justify-between md:flex md:grid-cols-3">
            <div>
              <Footer.Brand
                alt="Food Cart"
                href="https://flowbite.com"
                /* name="Food Cart" */
                src={logo}
              />
            </div>
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-6 sm:gap-6">
              <div>
                <Footer.Title title="about" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">
                    Food Cart
                  </Footer.Link>
                  <Footer.Link href="#">
                    Tailwind CSS
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Follow us" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">
                    Github
                  </Footer.Link>
                  <Footer.Link href="#">
                    Discord
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="about" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">
                    Food Cart
                  </Footer.Link>
                  <Footer.Link href="#">
                    Tailwind CSS
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Legal" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">
                    Privacy Policy
                  </Footer.Link>
                  <Footer.Link href="#">
                    Terms & Conditions
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Follow us" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">
                    Github
                  </Footer.Link>
                  <Footer.Link href="#">
                    Discord
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="about" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">
                    Food Cart
                  </Footer.Link>
                  <Footer.Link href="#">
                    Tailwind CSS
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright
              by="Food Cart"
              href="#"
              year={2023}
            />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon
                href="#"
                icon={BsFacebook}
              />
              <Footer.Icon
                href="#"
                icon={BsInstagram}
              />
              <Footer.Icon
                href="#"
                icon={BsTwitter}
              />
              <Footer.Icon
                href="#"
                icon={BsGithub}
              />
              <Footer.Icon
                href="#"
                icon={BsDribbble}
              />
            </div>
          </div>
        </div>
      </Footer>
    </div>
  );
};

export default MainFooter;