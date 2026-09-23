---
title: "Lesson 2 - Add star ratings: a quick win"
description: "Use Copilot CLI to make a small change to the game cards, review it in a forwarded browser, and merge it as your first pull request."
authors:
  - geektrainer
lastUpdated: 2026-09-18
---

Now that you've installed Copilot CLI and tried a conversation, it's time to make your first change to the project. You'll keep it small: the games already have a star rating in their data, but the game cards on the home page don't show it yet. You'll ask the agent to surface it, review the change, and merge it as your first pull request.

In this lesson, you will:

- start a focused Copilot conversation on a feature branch.
- ask the agent to make a small change to the project.
- review the change with `/diff`.
- run the app to confirm the change in a forwarded browser.
- open and merge your first pull request.

## Scenario

Each game in Tailspin Toys can have a star rating, and it already appears on the game details page. The game cards on the home page, though, only show the title, category, publisher, and description. As a warm-up, you'll have the agent display the existing rating on each card — a tiny, self-contained change that's perfect for your first session.

## Anatomy of a conversation

A **conversation** is where you work with Copilot CLI on a task. Unlike the Copilot app, a normal CLI conversation uses the repository and Git branch currently checked out in your terminal rather than creating a dedicated worktree. Saved conversations let you return to the same discussion later, while the files and branch remain ordinary Git state on disk.

Inside a conversation you'll see three things: your prompts and the agent's responses, the agent's tool activity as it explores and edits files, and the changes you can inspect with `/diff`.

## Start a conversation and request our change

Let's start a new conversation to begin implementing our feature.

1. Return to your Codespace.
2. If the terminal isn't open from before, select <kbd>Ctl</kbd>+<kbd>\`</kbd>.
3. If not already open, start Copilot by using the following command:

   ```bash
   copilot --yolo
   ```

4. Ensure a new session is started by using the slash command `/new` and selecting <kbd>Enter</kbd>.
4. Use the following prompt to request the change:

   ```plaintext
   Show each game's starRating out of 5 in the game cards on the list page. If the rating is null, show "No rating yet". Keep the card layout as it is, add tests, and run the relevant checks.
   ```

Copilot explores the project, locates the files used to display game details, and creates the necessary code. You've now added a new feature with Copilot CLI!

## Review the diff

All AI-generated changes deserve a review before they're merged, even small ones. Let's explore the changes right here in Copilot CLI.

1. Enter `/diff` and inspect every changed file.
2. Confirm the game card displays the numeric rating when it is present and `No rating yet` when `starRating` is `null`.
3. Confirm the tests cover both states.
4. Review the results of the checks Copilot ran and ask it to fix any failures.
5. Once your review is complete, select <kbd>Esc</kbd> to exit the diff screen.

> [!NOTE]
> Because Copilot, like all generative AI tools, is probabilistic rather than deterministic, your exact code may vary. Review the behavior rather than expecting one exact implementation.

## Check the changes

Of course we shouldn't just read the code and assume it works. Let's ask Copilot to start our website so we can examine the updated user interface (UI) in the browser forwarded by Codespaces.

1. Ask Copilot to start the app:

   ```plaintext
   Start the app so I can inspect the star-rating change in my browser. Tell me the URL and leave the server running.
   ```

2. When Codespaces reports that port `4321` is available, select **Open in Browser**.
3. Confirm game cards display their ratings out of five.
4. Return to Copilot and ask it to stop the server it started:

   ```plaintext
   Stop the development server you started.
   ```

## Open and merge your first pull request

You've now created the feature! It's time to create a pull request (PR) to merge the new code into the project.

1. Ask the default agent to commit the change:

   ```plaintext
   Commit the reviewed star-rating changes with an appropriate commit message.
   ```

2. Enter `/pr create`. Copilot CLI pushes the existing commit when it creates the PR and displays the PR URL.
3. Open the PR by holding <kbd>Command</kbd> (Mac) or <kbd>Ctrl</kbd> (Windows/Linux) and selecting the URL displayed by Copilot CLI.
4. Review the changed files and checks.
5. Once ready, select **Merge pull request**, then confirm the merge.
6. Return to your Codespace and exit Copilot CLI with `/exit`.
7. Update your local `main`:

   ```bash
   git checkout main
   git pull
   ```

## Summary and next steps

Congratulations! You shipped your first change using GitHub Copilot CLI! Specifically, you:

- started a focused Copilot conversation on a feature branch.
- directed the agent to make a small change to the game cards.
- reviewed the change with `/diff`.
- ran the app to confirm the star rating in a forwarded browser.
- opened and merged your first pull request.

Next, you'll [start from the filtering issue and use Plan and Autopilot modes][next-lesson] to build a larger feature.

## Resources

- [About GitHub Copilot CLI][about-copilot-cli]
- [Copilot CLI command reference][cli-reference]

[previous-lesson]: ../1-install-copilot-cli/
[next-lesson]: ../3-agent-modes/
[about-copilot-cli]: https://docs.github.com/copilot/concepts/agents/about-copilot-cli
[cli-reference]: https://docs.github.com/copilot/reference/copilot-cli-reference/cli-command-reference
