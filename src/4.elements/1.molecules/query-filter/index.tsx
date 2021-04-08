import SettingsIcon from "../../0.atoms/icons/settings";

export interface FilterProps {
  setting: string;
}

export const QueryFilter: React.FC<FilterProps> = ({ ...props }) => {
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#292929",
          color: "#C4C4C4",
          fontWeight: "bold",
          opacity: 0.6,
          minWidth: "10rem",
          borderRadius: "0.2rem",
          fontSize: "0.7rem",
          textAlign: "center",
          marginRight: "0.5rem",
          padding: "0.2rem",
          fontFamily: "Helvetica",
        }}
      >
        {`Price : ${props.setting} `}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "3px",
          // background: "red",
        }}
      >
        <SettingsIcon />
      </div>
    </div>
  );
};

export default QueryFilter;
