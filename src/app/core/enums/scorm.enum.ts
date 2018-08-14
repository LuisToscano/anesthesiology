export enum SCORMInteractionType {
    TrueOrFalse = 'true-false',
    Choice = 'choice',
    FillIn = 'fill-in',
    LongFillIn = 'long-fill-in',
    Matching = 'matching',
    Performance = 'performance',
    Sequencing = 'sequencing',
    Likert = 'likert',
    Numeric = 'numeric',
    Other = 'other'
}

export enum SCORMCompletionStatus {
    Completed = 'completed',
    Incomplete = 'incomplete',
    NotAttempted = 'not attempted',
    Unknown = 'unknown'
}

export enum SCORMInteractionResult{
    Correct =  'correct',
    Incorrect = 'incorrect',
    Unanticipated = 'unanticipated',
    Neutral = 'neutral'
}

export enum SCORMSuccessStatus{
    Passed = 'passed',
    Failed = 'failed',
    Unknown = 'unknown'
}