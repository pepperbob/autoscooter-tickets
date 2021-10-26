# Creates and Validates Tickets

Fun-fair autoscooter-ticket-generator. You want to ride scooter? Get a ticket.

Unreliable sometimes.

## Tickets

- Simple string-shaped
- linked to a "autoscooter"
- expire after short period
- signed

## Generation

Generates a new ticket for a autoscooter:

```bash
http POST http://localhost:3000/tickets/generate autoscooter=karl

ticket=$(http POST http://localhost:3000/tickets/generate autoscooter=karl | jq -r ".ticket")
```

## Validation

Validates a previously received ticket:

```bash
http POST http://localhost:3000/tickets/validate ticket="$ticket"
```

# Motivation

Used in learning/demo applications as external system that needs to be integrated as part of the workflow. Error handling should be an essential part here, as the system will occaionally produce errors on purpose.