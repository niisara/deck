wsl

cd /home/nisar/.openclaw/workspace/deck
 bash run-mermaid-popover.sh

---------------

#	Topic	Slide Focus
1	9 Temporal Workflow Patterns for Durable Execution	Saga, State Machine, Long-Running, Cron, Child Workflows, Signals, Queries, Continue-As-New, Update
2	11 Temporal Failure & Retry Strategies	Retry policies, timeouts (Start-to-Close, Schedule-to-Start, Heartbeat), dead-letter patterns, compensation, idempotency
3	7 Temporal vs. Traditional Queue Architectures	Temporal vs Kafka vs SQS vs Celery vs Airflow vs Step Functions vs BullMQ — when to pick which
4	9 Patterns for Orchestrating AI Agents with Temporal	Durable tool-calling loops, human-in-the-loop, LLM retry with fallback, parallel agent fan-out, agent memory persistence
5	11 Temporal Production Deployment Patterns	Worker scaling, task queue routing, versioning (Patching API), observability, multi-cluster replication, Nexus