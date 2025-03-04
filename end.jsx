function AppThemized() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
}

setTimeout(() => {
  ReactDOM.render(<AppThemized />, document.getElementById("root"));
});
