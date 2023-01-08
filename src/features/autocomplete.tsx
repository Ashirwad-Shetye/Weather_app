import React from "react";
import PropTypes from "prop-types";

class Autocomplete extends React.Component<any, any> {
  static propTypes = {
    suggestions: PropTypes.instanceOf(Array),
  };

  static defaultProps = {
    suggestions: [],
  };

  constructor(props: any) {
    super(props);

    this.state = {
      // The active selection's index
      activeSuggestion: 0,
      // The suggestions that match the user's input
      filteredSuggestions: [],
      // Whether or not the suggestion list is shown
      showSuggestions: false,
      // What the user has entered
      userInput: "",
    };
  }

  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { suggestions } = this.props;
    const userInput = e.currentTarget.value;

    // Filter our suggestions that don't contain the user's input
    const filteredSuggestions = suggestions.filter(
      (suggestion: any) =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    this.setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput: e.currentTarget.value,
    });
  };

  onClick = (e: React.MouseEvent) => {
    const input = e.target as HTMLElement;
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: input.innerText,
    });
  };

  onKeyDown = (e: React.KeyboardEvent) => {
    const { activeSuggestion, filteredSuggestions } = this.state;

    // User pressed the enter key
    if (e.keyCode === 13) {
      this.setState({
        activeSuggestion: 0,
        showSuggestions: false,
        userInput: filteredSuggestions[activeSuggestion],
      });
    }
    // User pressed the up arrow
    else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion - 1 });
    }
    // User pressed the down arrow
    else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion + 1 });
    }
  };

  render() {
    const {
      onChange,
      onClick,
      onKeyDown,
      state: {
        activeSuggestion,
        filteredSuggestions,
        showSuggestions,
        userInput,
      },
    } = this;

    let suggestionsListComponent;

    if (showSuggestions && userInput) {
      if (filteredSuggestions.length) {
        suggestionsListComponent = (
          <ul
            className="bg-white mt-2 rounded-lg p-1 max-h-80 overflow-y-scroll overflow-x-clip scrollbar-thin 
          scrollbar-thumb-slate-400 scrollbar-track-rounded-md scrollbar-thumb-rounded-md"
          >
            {filteredSuggestions.map((suggestion: any, index: any) => {
              let className;

              // Flag the active suggestion with a class
              if (index === activeSuggestion) {
                className =
                  "cursor-pointer flex items-center bg-gray-200 h-10 py-1 pl-1 w-40 text-ellipsis overflow-hidden hover:bg-gray-300 rounded-lg";
              } else {
                className =
                  "cursor-pointer flex items-center h-10 py-1 pl-1 w-40 text-ellipsis overflow-hidden hover:bg-gray-300 rounded-lg";
              }

              return (
                <li className={className} key={suggestion} onClick={onClick}>
                  {suggestion}
                </li>
              );
            })}
          </ul>
        );
      } else {
        suggestionsListComponent = (
          <div className="bg-white mt-2 rounded-lg">
            <h1 className="font-roboto text-gray-600 px-3">No suggestions!</h1>
          </div>
        );
      }
    }

    return (
      <div className="flex flex-col">
        <input
          type="text"
          placeholder="Location"
          maxLength={20}
          className="rounded-lg px-4 py-2 w-44 h-8 focus:outline-none font-roboto"
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={userInput}
        />
        {suggestionsListComponent}
      </div>
    );
  }
}

export default Autocomplete;
