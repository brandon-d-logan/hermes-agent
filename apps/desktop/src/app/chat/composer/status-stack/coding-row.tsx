import { useStore } from '@nanostores/react'
import { memo, useEffect } from 'react'

import { PrTag } from '@/app/chat/pr-tag'
import { StatusRow } from '@/components/chat/status-row'
import {
  type ActionItemSpec,
  ActionsContextMenu,
  ActionsMenu,
  type MenuKit,
  renderActionItem
} from '@/components/ui/actions-menu'
import { Button } from '@/components/ui/button'
import { Codicon } from '@/components/ui/codicon'
import { CopyButton } from '@/components/ui/copy-button'
import { DiffCount } from '@/components/ui/diff-count'
import type { HermesGitBranch } from '@/global'
import { useI18n } from '@/i18n'
import { displayPath } from '@/lib/display-path'
import { openWorktreeDialog, registerRepoStatusCwd, repoStatusForCwd, repoWorktreesForCwd } from '@/store/coding-status'
import { notifyError } from '@/store/notifications'
import { $pullRequestsByBranch, branchPrKey, refreshPullRequests } from '@/store/pull-requests'

// Tiny uppercase section header, matching the composer "+" menu's labels.
const MENU_SECTION = 'text-[0.625rem] font-semibold uppercase tracking-wider text-(--ui-text-tertiary)'

interface CodingStatusRowProps {
  /** Branch the current draft off into a fresh worktree + session, based on
   *  `base` (a branch name; omitted = current HEAD). The composer owns the
   *  draft, so it supplies the orchestration; the row just collects the new
   *  branch name + base. Omitted (e.g. remote backend) hides the affordance. */
  onBranchOff?: (branch: string, base?: string) => Promise<void>
  /** Check an existing branch out into a fresh worktree + session (no new
   *  branch). Drives the dialog's "convert a branch" picker. */
  onConvertBranch?: (branch: string, path?: null | string, isDefault?: boolean) => Promise<void>
  /** List the repo's local branches for the "convert a branch" picker. */
  onListBranches?: () => Promise<HermesGitBranch[]>
  /** Open the review pane (changed files + diffs). */
  onOpen?: () => void
  /** Jump into an existing worktree (open a fresh session anchored there). */
  onOpenWorktree?: (path: string) => void
  /** Switch the current repo checkout to another branch. */
  onSwitchBranch?: (branch: string) => Promise<void>
  /** Repo root path for the worktree dialog. */
  repoPath?: null | string
}

/**
 * The always-on coding-context row, the BASE of the composer status stack:
 * current branch, dirty summary (+/-), and ahead/behind. A touch more prominent
 * than the per-turn rows above it (larger branch label, accent glyph), and the
 * entry point to the review pane. Hidden when the active session isn't in a
 * local git repo (the probe returns null).
 */
export const CodingStatusRow = memo(function CodingStatusRow({
  ..._props
}: CodingStatusRowProps) {
  // Temporarily suppressed — always returns null to hide the git status bar.
  return null
})
