import React from "react";

export class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      parentClass: props.parentClass,
    };

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
  }

  toggleDropdown() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  closeDropdown() {
    this.setState({ isOpen: false });
  }

  render() {
    console.log(this.props.parentClass);
    return (
      <div className={this.state.parentClass}>
        <div className="relative">
          <div className="flex justify-center items-center">
            <button
              onClick={this.toggleDropdown}
              className="relative z-10 block h-11 w-11 border-2 border-gray-600 rounded-full overflow-hidden focus:outline-none focus:border-white"
            >
              <img
                className="w-full h-full object-cover "
                src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80"
                alt="Your avatar"
              />
            </button>
            <button className="ml-4 text-xl" onClick={this.toggleDropdown}>
              Harsh Jha
            </button>
          </div>
          <button
            className={
              this.state.isOpen
                ? " cursor-default bg-black opacity-50 fixed inset-0 w-full h-full"
                : "hidden"
            }
            onClick={this.closeDropdown}
            tabIndex="-1"
          />
          <div
            className={
              this.state.isOpen
                ? "absolute right-0 mt-2 w-70 bg-white rounded-lg py-2 shadow-xl dark:divide-gray-600 divide-y divide-gray-100"
                : "hidden"
            }
          >
            <div class="px-4 py-3 text-lg text-gray-600 dark:text-gray">
              <div>Harsh Jha</div>
              <div class="font-medium truncate">jhaharsh878@gmail.com</div>
            </div>
         <div>
            <a
              href="/"
              className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
            >
              Dashbord
            </a>
            <a
              href="/v1/signup"
              className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
              onClick={() => {
                this.props.setisLogin(false);
              }}
            >
              Sign Out
            </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
