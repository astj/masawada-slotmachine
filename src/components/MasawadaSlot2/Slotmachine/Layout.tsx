import React from "react";

export type SlotLayoutProps = Readonly<{
  renderMa: () => React.ReactElement;
  renderSa: () => React.ReactElement;
  renderWa: () => React.ReactElement;
  renderDa: () => React.ReactElement;
  buttonDisabled: boolean;
  onButtonClick?: () => void;
  renderRefreshRateInput: () => React.ReactElement;
}>;

const buttonBaseCss = {
  backgroundColor: "black",
  border: "none",
  color: "white",
  padding: "15px 32px",
  textAlign: "center",
  textDecoration: "none",
  display: "inline-block",
  fontSize: "16px",
} as const;

export const SlotLayout: React.FC<SlotLayoutProps> = ({
  renderMa,
  renderSa,
  renderWa,
  renderDa,
  onButtonClick,
  buttonDisabled,
  renderRefreshRateInput,
}) => {
  const buttonCss = {
    ...buttonBaseCss,
    ...(buttonDisabled ? { backgroundColor: "#cccccc" } : {}),
  };
  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          maxWidth: "700px",
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          margin: "auto",
        }}
      >
        {renderMa()}
        {renderSa()}
        {renderWa()}
        {renderDa()}
      </div>
      <div style={{ textAlign: "center" }}>
        <button style={buttonCss} onClick={onButtonClick}>
          START!
        </button>
        {renderRefreshRateInput()}
      </div>
    </div>
  );
};
