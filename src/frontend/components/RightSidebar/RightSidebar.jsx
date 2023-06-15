import "./RightSidebar.css";
export const RightSidebar = () => {
  return (
    <div className="right-sidebar-case" id="lapy-sidebar-case">
      <div className="follow-user-case">
        <div className="follow-user row">
          <img
            align="center"
            loading="lazy"
            src="https://banner2.cleanpng.com/20180329/zue/kisspng-computer-icons-user-profile-person-5abd85306ff7f7.0592226715223698404586.jpg"
            alt=""
          />
          <p>
            <p>John kids</p>
            <p>@Johnkidd</p>
          </p>
          <button className="row">
            <ion-icon name="add-outline"></ion-icon>
            Follow
          </button>
        </div>
        <div className="follow-user row">
          <img
            width="40rem"
            height="40rem"
            align="center"
            loading="lazy"
            src="https://banner2.cleanpng.com/20180329/zue/kisspng-computer-icons-user-profile-person-5abd85306ff7f7.0592226715223698404586.jpg"
            alt=""
          />
          <p>
            <p>John kids</p>
            <p>@Johnkidd</p>
          </p>
          <button className="row">
            <ion-icon name="add-outline"></ion-icon> Follow
          </button>
        </div>
        <div className="follow-user row">
          <img
            width="40rem"
            height="40rem"
            align="center"
            loading="lazy"
            src="https://banner2.cleanpng.com/20180329/zue/kisspng-computer-icons-user-profile-person-5abd85306ff7f7.0592226715223698404586.jpg"
            alt=""
          />
          <p>
            <p>John kids</p>
            <p>@Johnkidd</p>
          </p>
          <button className="row">
            <ion-icon name="add-outline"></ion-icon> Follow
          </button>
        </div>
      </div>
    </div>
  );
};

export { RightSidebar as default };
