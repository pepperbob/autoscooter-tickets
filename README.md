# Creates and Validates Tickets

Fun-fair scooter-ticket-generator. You want to ride scooter? Get a ticket.

Unreliable sometimes.

## Tickets

- Simple string-shaped
- linked to a "scooter"
- expire after short period
- signed

## Generation

Generates a new ticket for a scooter:

```bash
http POST http://localhost:3000/tickets/generate scooter=karl

ticket=$(http POST http://localhost:3000/tickets/generate scooter=karl | jq -r ".ticket")
```

## Validation

Validates a previously received ticket:

```bash
http POST http://localhost:3000/tickets/validate ticket="$ticket"
```
